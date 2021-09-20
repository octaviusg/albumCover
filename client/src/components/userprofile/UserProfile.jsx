import React from "react";
import UserCollection from "../usercollection/UserCollection";
import "./userprofile.css";

export default function UserProfile() {
  return (
    <div className="profileContainer">
      <div className="profileInfo">
        <img src="/assets/person/ogProfile.jpeg" alt="" className="userImg" />
        <div className="userbio">
          <span className="userName">Octavio Garcia</span>
          <span className="usertagline">Austin, Tx</span>
        </div>

        <div className="userInteraction">
          <button className="followUser">Follow +</button>
        </div>
      </div>

      <div className="userCollectionContainer">
        <div className="genres">
          <div className="genreNav">
            <ul>
              <li>
                <a className="active" href="#home">
                  All
                </a>
              </li>
              <li>
                <a href="#">Hip-Hop </a>
              </li>

              <li>
                <a href="#"> Country </a>
              </li>
              <li>
                <a href="#"> Folk </a>
              </li>
              <li>
                <a href="#"> Rock </a>
              </li>
              <li>
                <a href="#">Pop </a>
              </li>
              <li>
                <a href="#">Indie </a>
              </li>
              <li>
                <a href="#">Alt.-Rock </a>
              </li>
              <li>
                <a href="#">Jazz </a>
              </li>
              <li>
                <a href="#">Blues </a>
              </li>
              <li>
                <a href="#">Latin </a>
              </li>
              <li>
                <a href="#">Latin </a>
              </li>
              <li>
                <a href="#">Latin </a>
              </li>
              <li>
                <a href="#">Latin </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="collection"></div>
      </div>
    </div>
  );
}
