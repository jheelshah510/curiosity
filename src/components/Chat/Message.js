import React from "react";
import studentLogo from "../../assets/graduated.png";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={studentLogo} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p className="chat">Hello</p>
        <img src="" alt="" className="image" />
      </div>
    </div>
  );
};

export default Message;
