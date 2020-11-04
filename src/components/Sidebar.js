import React from "react";
import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalicon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
       src="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/s150x150/90886555_3192855667411686_3984898308228251648_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_ohc=V8zzqcVubiEAX8XGmEY&oh=4532576b1ea57eb0fe20fa64094ff19c&oe=5FCB251A"
       title="Gokul"
      />
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
