import axios from "axios";
import React from "react";

const CreateUser = () => {
  const createUser = async () => {
    try {
      /*****
       * "first_name", "last_name", "email"
       *****/
      const data = {
        username: "bob_baker",
      };
      const config = {
        method: "post", // get or create user
        url: "/create_user",
        data: data,
      };
      const response = await axios(config); // send request using axios
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createChat = async () => {
    try {
      /*****
       * "title", "admin_username"
       *****/
      const data = {
        title: "Baker's Chat",
        admin_username: "bob_baker",
      };
      const config = {
        method: "post", // get or create user
        url: "/create_chat",
        data: data,
      };
      const response = await axios(config); // send request using axios
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      /*****
       * username, (id in backend)
      *****/
      const data = {
        username: "bob_baker",
      };
      const config = {
        method: "post",
        url: "/add_user",
        data: data,
      };
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getChatMsgs = async () => {
    try {
      /*****
       * username, (id in backend)
      *****/
      const data = {
        username: "Saket",
      };
      const config = {
        method: "post",
        url: "/get_chat_msgs",
        data: data,
      };
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const sendChatMsg = async () => {
    try {
      /*****
       * username, (id in backend)
      *****/
      const data = {
        username: "Saket",
        data: {
          "text": "Hello World",
          "custom_json": {"gif": "https://giphy.com/clips/ufc-4eZuG5kNYvDrGc6gYk"}
        }
      };
      const config = {
        method: "post",
        url: "/post_chat_msg",
        data: data,
      };
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={createUser}>Create User</button>
      <br />
      <button onClick={() => createChat()}>Create Chat</button>
      <br />
      <button onClick={() => addUser()}>Add User</button>
      <br />
      <button onClick={() => getChatMsgs()}>Get Chat</button>
      <br />
      <button onClick={() => sendChatMsg()}>Send Chat Msg</button>
    </>
  );
};

export default CreateUser;
