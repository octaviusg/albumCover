import React, { useState, useEffect } from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sideBarContainer">
      <div className="sideNav">
        <HomeIcon className="navIcon" />
        <Link className="sideLink" to="profile/:username">
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
