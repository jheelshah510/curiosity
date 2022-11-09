import studentLogo from "../../assets/user.png";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={studentLogo} alt="" style={{ marginTop: "25px" }} />
      </div>
      <div className="messageContent">
        <p className="chat">Hello</p>
        <img src="" alt="" className="image" />
      </div>
    </div>
  );
};

export default Message;
