import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "../sidebarButton/SidebarButton";
// icons
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

import apiClient from "../../spotify";

function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BtGB_9GUsrrRqX2Wo4sgzHfh9LNmm4gkkQ&usqp=CAU"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      const img = response.data.images[0].url;
      setImage(img);
            // console.log(response.data.images);
    });
  }, [])
  

  return (
    <div className="sidebar-container">
      <img src={image} alt="profile" />
      <div>
        <SidebarButton title="feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="sign out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}

export default Sidebar;
