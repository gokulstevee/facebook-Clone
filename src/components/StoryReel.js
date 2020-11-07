import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/StoryReel.css"

const StoryReel = ({ image, profileSrc, title }) => {
  return (
    <div className="storyReel" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="storyReel__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default StoryReel;
