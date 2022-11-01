import React from "react";
import "./ChatLayout.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const InputMessage = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Text Here...." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <ImageOutlinedIcon />
        </label>
        <button class="sandy">Send</button>
      </div>
    </div>
  );
};

export default InputMessage;
