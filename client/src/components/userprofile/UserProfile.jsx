import React from "react";
import Feed from "../../components/feed/Feed";
import "./userprofile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import blankProfile from "../blank-profile.png";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <div className="profileContainer">
      <div className="profileInfo">
        <img
          src={user.profilePicture || blankProfile}
          alt=""
          className="userImg"
        />
        <div className="userbio">
          <span className="userName">{user.username}</span>
          <span className="usertagline">{user.desc}</span>
        </div>

        <div className="userInteraction">
          <button className="followUser">Follow +</button>
        </div>
      </div>

      {/* <div className="userCollectionContainer">
        <div className="genres">
          <div className="genreNav">
            <ul>
              <li>
                <a className="active" href="#home">
                  All
                </a>
              </li>
              <li>
                <a href="/">Hip-Hop </a>
              </li>

              <li>
                <a href="/"> Country </a>
              </li>
              <li>
                <a href="/"> Folk </a>
              </li>
              <li>
                <a href="/"> Rock </a>
              </li>
              <li>
                <a href="/">Pop </a>
              </li>
              <li>
                <a href="/">Indie </a>
              </li>
              <li>
                <a href="/">Alt.-Rock </a>
              </li>
              <li>
                <a href="/">Jazz </a>
              </li>
              <li>
                <a href="/">Blues </a>
              </li>
              <li>
                <a href="/">Latin </a>
              </li>
              <li>
                <a href="/">Latin </a>
              </li>
              <li>
                <a href="/">Latin </a>
              </li>
              <li>
                <a href="/">Latin </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="collection">
        <Feed username={username} />
      </div>
    </div>
  );
}
