import React from "react";
import "./userSetsComp.css";
import { Link } from "react-router-dom";
import blankProfile from "../blank-profile.png";
import BackBtn from "../backbtn/BackBtn";

export default function UserSetsComp() {
  return (
    <div className="userSettingsContainer">
      <BackBtn />
      <form action="" className="editMyProfile">
        <div className="head">
          <img src={blankProfile} alt="img" className="editprofileimg" />
          <div className="userbuttons">
            <button className="userBtn">Upload</button>
            <button className="userRemove">Remove</button>
          </div>
        </div>
        <div className="editInputs">
          <input
            type="text"
            autoComplete="false"
            placeholder="Username"
            className="editProfile"
          />
          <input
            type="text"
            autoComplete=""
            placeholder="Email"
            className="editProfile"
          />
          <input
            type="text"
            autoComplete="false"
            placeholder="Tag line"
            className="editProfile"
          />
        </div>
        <button className="updateBtn">Update profile</button>
      </form>
    </div>
  );
}
