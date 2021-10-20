import { useContext } from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SettingsIcon from "@material-ui/icons/Settings";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sideBarContainer">
      <div className="sideNav">
        <Link className="sideLink" activeclassname="active" to="/">
          <HomeIcon className="navIcon" />
          Home
        </Link>

        <Link className="sideLink" to={`/collection/${user.username}`}>
          <PhotoLibraryIcon className="navIcon" />
          Collection
        </Link>
        <Link className="sideLink" to="/addtitle">
          <AddCircleIcon className="navIcon" />
          Add title
        </Link>
        <Link className="sideLink" to={"/explore"}>
          <ExploreIcon className="navIcon" />
          Explore
        </Link>
        <Link className="sideLink" to={`/bookmarks`}>
          <CollectionsBookmarkIcon className="navIcon" />
          Bookmarks
        </Link>
      </div>
      <div className="settings">
        <SettingsIcon className="navIcon" />
      </div>
    </div>
  );
}
