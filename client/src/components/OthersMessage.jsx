import React from "react";
const DOMPurify = require("dompurify")(window);

const OthersMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
   
  return (
    <div className="message-row">
      {(message.sender.avatar !== null) && isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: `url(${message?.sender?.avatar})`,
          }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(message.text),
            }}
          ></p>
        </div>
      )}
    </div>
  );
};

export default OthersMessage;
