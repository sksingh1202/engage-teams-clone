import axios from "axios";

export async function createChat(user, roomID) {
  try {
    const currentdate = new Date();
    const meetingTitle = `${user.given_name || user.name || user.email}'s Meeting Chat: ${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
    const data = {
      userData: {
        title: meetingTitle,
        admin_username: user.email,
      },
      roomID: roomID,
    };
    const config = {
      method: "post", // get or create user
      url: "/create_chat",
      data: data,
    };
    const response = await axios(config); // send request using axios
    // console.log(response);
    return response.data.id;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getChatMsgs(user, roomID) {
  try {
    const data = {
      username: user.email,
      roomID: roomID,
    };
    // console.log(`roomID: ${roomID}`);
    const config = {
      method: "post",
      url: "/get_chat_msgs",
      data: data,
    };
    const response = await axios(config);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function sendChatMsg(user, msg, roomID) {
  try {
    const data = {
      username: user.email,
      data: {
        text: msg,
      },
      roomID: roomID,
    };
    // console.log(data);
    const config = {
      method: "post",
      url: "/post_chat_msg",
      data: data,
    };
    const response = await axios(config);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
