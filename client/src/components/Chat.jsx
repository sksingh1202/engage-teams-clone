import React from "react";

import { ChatEngine } from "react-chat-engine";

import "./css/Chat.css";
import ChatFeed from "./ChatFeed";
 
const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="149ec674-7a51-4845-bc44-3e24e5ce5c58"
      userName="John"
      userSecret="saket"
      renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />}
    />
  );
};

export default Chat;
