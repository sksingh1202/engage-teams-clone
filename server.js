// import modules
require("dotenv").config();
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const path = require("path");

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

io.on("connection", (socket) => {
  // "join-room" is triggered by client after loading the stream
  socket.on("join-room", (roomID) => {
    // add user (socket.id) to room (roomId)
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) {
        socket.emit("room-full");
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }

    rooms[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id) => id != socket.id);
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

  socket.on("disconnect", () => {
    const roomID = rooms[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter((id) => id !== socket.id);
      users[roomID] = room;
    }
    socket.broadcast.emit("user-left", socket.id);
  });
});

httpServer.listen(process.env.PORT || 8000, () =>
  console.log("server is running on port 8000")
);
