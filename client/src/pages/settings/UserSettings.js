import React from "react";
import UserSetsComp from "../../components/userSetsComp/UserSetsComp";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function UserSettings() {
  return (
    <div>
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <UserSetsComp />
      </div>
    </div>
  );
}
