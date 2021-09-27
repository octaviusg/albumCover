import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UserProfile from "../../components/userprofile/UserProfile";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <UserProfile />
      </div>
    </div>
  );
}
