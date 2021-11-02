import React from "react";
import { useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscCompass } from "react-icons/vsc";
import { BsBookmarks } from "react-icons/bs";

import { VscHome } from "react-icons/vsc";
import { VscLibrary } from "react-icons/vsc";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./mobileBottomnav.css";

export default function MobileBottomNav() {
  const { user } = useContext(AuthContext);
  return (
    <div className="mobileBottomNavContainer">
      <NavLink exact className="sideLink" activeClassName="nav-active" to="/">
        <VscHome activeClassName="nav-active" />
      </NavLink>

      <NavLink
        exact
        className="sideLink"
        activeClassName="nav-active"
        to={`/collection/${user.username}`}
      >
        <VscLibrary activeClassName="nav-active" />
      </NavLink>
      <NavLink
        exact
        className="sideLink"
        activeClassName="nav-active"
        to="/addtitle"
      >
        <IoIosAddCircleOutline activeClassName="nav-active" />
      </NavLink>
      <NavLink
        exact
        className="sideLink"
        activeClassName="nav-active"
        to={"/explore"}
      >
        <VscCompass activeClassName="nav-active" />
      </NavLink>
      <NavLink
        exact
        className="sideLink"
        activeClassName="nav-active"
        to={`/bookmarks`}
      >
        <BsBookmarks
          activeClassName="nav-active"
          className="sideLinksideLink"
        />
      </NavLink>
    </div>
  );
}
