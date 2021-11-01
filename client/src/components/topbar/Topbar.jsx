import React, { useContext } from "react";
import "./topbar.css";
import { VscSearch } from "react-icons/vsc";
import { useState } from "react";
import blankProfile from "../blank-profile.png";
import { Link } from "react-router-dom";
import { VscBell } from "react-icons/vsc";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const onClickC = () => setShowText(false);

  const Notification = () => (
    <div className="nMenu">
      <div className="nMenuItem">
        <Link className="notificationMenuLink">
          <img
            src={user.profilePicture || blankProfile}
            alt=""
            className="notificationImg"
          />
          waylon bookmarked Harvest
        </Link>
      </div>
    </div>
  );

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div>
          <Link className="brandLink" to="/">
            <span className="brandinglog">hi-fi cover </span>
          </Link>
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <VscSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search collections by username"
            className="search"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topNavIcons">
          {showText ? (
            <VscBell className="noti" onClick={onClickC} />
          ) : (
            <VscBell className="noti" onClick={onClick} />
          )}
          <span className="notifcationBadge"></span>
          {showText ? <Notification /> : null}
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture || blankProfile}
            alt="img"
            className="topbarProfile"
          />
        </Link>
      </div>
    </div>
  );
}
