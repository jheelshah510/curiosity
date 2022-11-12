import studentLogo from "../../assets/user.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ChatLayout.css";

const Message = ({ message }) => {
  const { user } = useAuthContext();

  return (
    <div className={`message ${message.senderId === user.uid && "owner"} `}>
      <div className="messageInfo">
        <span>
          <img src={studentLogo} alt="" style={{ marginTop: "25px" }} />
          <div style={{ fontSize: 15 }}>{message.senderName}</div>
        </span>
      </div>
      {/* className="messageContent" */}
      <div className="messageContent">
        <p className="chat">{message.description}</p>
        {console.log("IMG URL OF IMAGE: ", message.img)}
        {message.img ? (
          <img
            src={message.img}
            alt=""
            className="image"
            style={{ width: "400px", height: "400px" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Message;
