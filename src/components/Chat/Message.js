import studentLogo from "../../assets/user.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useChats } from "../../hooks/useChats";
import { useDoubt } from "../../hooks/useDoubt";

const Message = ({ message }) => {
  const chatData = useChats();
  const user = useAuthContext();
  const initialData = useDoubt();

  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img src={studentLogo} alt="" style={{ marginTop: "25px" }} />
      </div>
      <div className="messageContent">
        <p className="chat">Hello</p>
        <img src="" alt="" className="image" />
      </div> */}
    </div>
  );
};

export default Message;
