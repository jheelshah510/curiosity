import studentLogo from "../../assets/user.png";
import { useAuthContext } from "../../hooks/useAuthContext";

const Message = ({ message }) => {
  const user = useAuthContext();

  return (
    <div className={`message ${message.senderId === user.uid && "owner"} `}>
      <div className="messageInfo">
        <img src={studentLogo} alt="" style={{ marginTop: "25px" }} />
      </div>
      <div className="messageContent">
        <p className="chat">{message.description}</p>
        <img src={message.img} alt="" className="image" />
      </div>
    </div>
  );
};

export default Message;
