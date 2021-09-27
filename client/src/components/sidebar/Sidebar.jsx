import React from "react";
import { useContext } from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sideBarContainer">
      <div className="sideNav">
        <Link className="sideLink" to="/">
          <HomeIcon className="navIcon" />
        </Link>

        <Link className="sideLink" to={`profile/${user.username}`}>
          <PhotoLibraryIcon className="navIcon" />
        </Link>
        <AddCircleIcon className="navIcon" />
        <ExploreIcon className="navIcon" />
        <BookmarksIcon className="navIcon" />
      </div>
      <div className="settings">
        <SettingsIcon className="navIcon" />
      </div>
    </div>
  );
}
