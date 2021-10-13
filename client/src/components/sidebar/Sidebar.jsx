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
        <Link className="sideLink" activeClassName="active" to="/">
          <HomeIcon className="navIcon" />
          home
        </Link>

        <Link className="sideLink" to={`/collection/${user.username}`}>
          <PhotoLibraryIcon className="navIcon" />
          collection
        </Link>
        <Link className="sideLink" to="/new-album">
          <AddCircleIcon className="navIcon" />
          add title
        </Link>
        <Link className="sideLink" to={`/profile/${user.username}`}>
          <ExploreIcon className="navIcon" />
          explore
        </Link>
        <Link className="sideLink" to={`/profile/${user.username}`}>
          <CollectionsBookmarkIcon className="navIcon" />
          bookmarks
        </Link>
      </div>
      <div className="settings">
        <SettingsIcon className="navIcon" />
      </div>
    </div>
  );
}
