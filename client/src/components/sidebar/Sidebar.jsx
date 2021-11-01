import { useContext } from "react";
import "./sidebar.css";

import { IoIosAddCircleOutline } from "react-icons/io";
import { VscCompass } from "react-icons/vsc";
import { BsBookmarks } from "react-icons/bs";
import { VscGear } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscLibrary } from "react-icons/vsc";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sideBarContainer">
      <div className="sideNav">
        <NavLink exact className="sideLink" activeClassName="nav-active" to="/">
          <VscHome activeClassName="nav-active" className="navIcon" />
          Home
        </NavLink>

        <NavLink
          exact
          className="sideLink"
          activeClassName="nav-active"
          to={`/collection/${user.username}`}
        >
          <VscLibrary activeClassName="nav-active" className="navIcon" />
          Collection
        </NavLink>
        <NavLink
          exact
          className="sideLink"
          activeClassName="nav-active"
          to="/addtitle"
        >
          <IoIosAddCircleOutline
            activeClassName="nav-active"
            className="navIcon"
          />
          Add title
        </NavLink>
        <NavLink
          exact
          className="sideLink"
          activeClassName="nav-active"
          to={"/explore"}
        >
          <VscCompass activeClassName="nav-active" className="navIcon" />
          Explore
        </NavLink>
        <NavLink
          exact
          className="sideLink"
          activeClassName="nav-active"
          to={`/bookmarks`}
        >
          <BsBookmarks activeClassName="nav-active" className="navIcon" />
          Bookmarks
        </NavLink>
      </div>
      <div className="settings">
        <NavLink
          exact
          className="sideLink"
          activeClassName="nav-active"
          to={`/settings`}
        >
          <VscGear activeClassName="nav-active" className="navIcon" />
        </NavLink>
      </div>
    </div>
  );
}
