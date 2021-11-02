import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Collection from "../../components/collection/Collection.jsx";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileBottomNav from "../../components/mobileBottomNav/MobileBottomNav";

export default function UserCollection() {
  return (
    <div className="userCollectionContainer1">
      <MobileNav />
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <Collection />
      </div>

      <MobileBottomNav />
    </div>
  );
}
