// import modules
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const path = require("path");
const axios = require("axios");
const { response } = require("express");
const { readdirSync } = require("fs");

app.use(bodyParser.json());

// when deployed
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// dictionary with key => roomId and value => [Array of userId(s)]
const users = {};

// dictionary with key => userId and value => roomId
const rooms = {};

// dictionary with key => roomId and value => chatId
const chats = {};

// dictionary with key => roomId and value => admin username
const admins = {};

// dictionary with key => userId and value => [Aray of email(s)]
const emails = {};

// dictionary with key => roomId and value => [Aray of allowed email(s)]
const allowedUsersInRoom = {};

// dictionary with key => roomId and value => userId of admin
const adminSocket = {};

io.on("connection", (socket) => {
  // "join-room" is triggered by client after loading the stream
  socket.on("join-room", (payload) => {
    // add user (socket.id) to room (roomId)
    const roomID = payload.roomID;
    const email = payload.email;
    if (users[roomID]) {
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
      allowedUsersInRoom[roomID] = [email];
      adminSocket[roomID] = socket.id;
    }

    rooms[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id) => id !== socket.id);
    socket.emit("all-users", usersInThisRoom); // trigger "all-users" for client to connect to remaining peer(s)
  });

  // "offer" is triggered by client after initiating the peer connection
  socket.on("offer", (payload) => {
    io.to(payload.userToSignal).emit("user-joined", {
      data: payload.data,
      callerID: payload.callerID,
    });
  });

  socket.on("answer", (payload) => {
    io.to(payload.callerID).emit("receiving-answer", {
      data: payload.data,
      id: socket.id,
    });
  });

  socket.on("reload", () => {
    // console.log("reload");
    socket.broadcast.emit("reload_msgs", socket.id);
  });

  socket.on("disconnect", (reason) => {
    if (reason === "io server disconnect") {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    } else if (
      reason === "io client disconnect" ||
      reason === "client namespace disconnect" ||
      reason === "transport close"
    ) {
      // the disconnection was initiated by the client, which means the user has left
      const roomID = rooms[socket.id];
      let room = users[roomID];
      if (room) {
        room = room.filter((id) => id !== socket.id);
        users[roomID] = room;
      }
      delete rooms[socket.id];
      socket.broadcast.emit("user-left", socket.id);
      setTimeout(() => socket.disconnect(true), 50);
    } else if (reason === "ping timeout") {
      console.log(4);
    } else if (reason === "transport error") {
      console.log(5);
    }
    // else the socket will automatically try to reconnect
    console.log(`Socket disconnected due to: ${reason}`);
  });

  // admit - deny permission
  socket.on("permission", (payload) => {
    const userAlias = payload.userName;
    const roomID = payload.roomID;
    const email = payload.email;
    emails[socket.id] = email;

    const allowedUsers = allowedUsersInRoom[roomID];
    console.log("permission arrived");
    // console.log(allowedUsers, email);

    if (!(roomID in allowedUsersInRoom) || allowedUsers.includes(email)) {
      // allow directly
      socket.emit("no permit required");
    } else {
      io.to(adminSocket[roomID]).emit("permit?", {
        id: socket.id,
        userAlias: userAlias,
      });
    }
  });

  socket.on("permit status", payload => {
    if (payload.allowed){
      // allow the user to enter into the meeting
      const roomID = rooms[socket.id];
      // add this user to the list of trusted users
      allowedUsersInRoom[roomID].push(emails[payload.id]);
      console.log("Allowed");
      io.to(payload.id).emit("allowed", chats[roomID]);
    }
    else{
      console.log("Denied");
      io.to(payload.id).emit("denied");
    }
  });
});

app.post("/create_user", async (req, res) => {
  try {
    let data = req.body;
    data["secret"] = process.env.USER_SECRET;
    const config = {
      method: "put", // get or create user
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": process.env.PROJECT_PRIVATE_KEY,
      },
      data: data,
    };
    const response = await axios(config); // send request using axios
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post("/create_chat", async (req, res) => {
  try {
    if (req.body.roomID in users) throw "Room Already Exists!";
    let data = req.body.userData;
    // console.log(data);
    const config = {
      method: "post", // get or create user
      url: "https://api.chatengine.io/chats/",
      headers: {
        "Project-ID": process.env.PROJECT_ID,
        "User-Name": data.admin_username,
        "User-Secret": process.env.USER_SECRET,
      },
      data: data,
    };
    const response = await axios(config); // send request using axios
    chats[req.body.roomID] = response.data.id;
    admins[req.body.roomID] = data.admin_username;
    // console.log(`Chats: ${chats[req.body.roomID]}`);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post("/add_user", async (req, res) => {
  try {
    const data = req.body.userData;
    const config = {
      method: "POST",
      url: `https://api.chatengine.io/chats/${chats[req.body.roomID]}/people/`,
      headers: {
        "Project-ID": process.env.PROJECT_ID,
        "User-Name": admins[req.body.roomID],
        "User-Secret": process.env.USER_SECRET,
      },
      data: data,
    };
    const response = await axios(config);
    // console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post("/get_chat_msgs", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const config = {
      method: "get",
      url: `https://api.chatengine.io/chats/${chats[data.roomID]}/messages/`,
      headers: {
        "Project-ID": process.env.PROJECT_ID,
        "User-Name": data.username,
        "User-Secret": process.env.USER_SECRET,
      },
    };
    const response = await axios(config);
    // console.log(response.data);
    res.send(response.data);
  } catch (error) {
    // console.log(error);
    res.send(error);
  }
});

app.post("/post_chat_msg", async (req, res) => {
  try {
    const data = req.body;
    const config = {
      method: "post",
      url: `https://api.chatengine.io/chats/${chats[data.roomID]}/messages/`,
      headers: {
        "Project-ID": process.env.PROJECT_ID,
        "User-Name": data.username,
        "User-Secret": process.env.USER_SECRET,
      },
      data: data.data,
    };
    const response = await axios(config);
    // console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post("/fetch_keys", (req, res) => {
  const data = {
    projectID: process.env.PROJECT_ID,
    userSecret: process.env.USER_SECRET,
  };
  res.send(data);
});

app.get("/get_rooms", async (req, res) => {
  const validRooms = Object.keys(users);
  // console.log(validRooms);
  res.send({
    validRooms: validRooms,
  });
});

httpServer.listen(process.env.PORT || 8000, () => {
  console.log("server is running on port 8000");
});
