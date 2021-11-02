import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UserProfile from "../../components/userprofile/UserProfile";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileBottomNav from "../../components/mobileBottomNav/MobileBottomNav";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <MobileNav />
      <div className="bodyContent">
        <Sidebar />
        <UserProfile />
      </div>
      <MobileBottomNav />
    </div>
  );
}
