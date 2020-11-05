import { Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "../styles/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { UserContext } from "../context/Context";

const MessageSender = () => {
  const { state } = useContext(UserContext);

  const [input, setInput] = useState("");
  const [imageURL, setImageURl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setImageURl("");
    setInput("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={state.user.photoURL} />
        <form>
          <input
            placeholder={`What's on your mind, ${state.user.displayName}?`}
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder="image URL (optional)"
            value={imageURL}
            onChange={(e) => setImageURl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hiden button
          </button>
        </form>
      </div>
      <div className="messagesender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
