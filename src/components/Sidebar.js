import React, { useContext } from "react";
import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalicon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { UserContext } from "../context/Context";

const Sidebar = () => {
  const { state } = useContext(UserContext);

  return (
    <div className="sidebar">
      <SidebarRow src={state.user.photoURL} title={state.user.displayName} />
      <SidebarRow
        Icon={LocalHospitalicon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
