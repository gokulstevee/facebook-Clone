import { WidgetsOutlined } from "@material-ui/icons";
import React from "react";
import "../styles/Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="360"
        height="99%"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        frameborder="0"
        style={{ border: "none", overflow: "hidden", borderRadius:"10px" }}
      ></iframe>
    </div>
  );
};

export default Widgets;
