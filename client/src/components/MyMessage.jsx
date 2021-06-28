import React from "react";
const DOMPurify = require('dompurify')(window);

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(message.text)}}></p>
    </div>
  );
};

export default MyMessage;
