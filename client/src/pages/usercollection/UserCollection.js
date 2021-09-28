import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Collection from "../../components/collection/Collection.jsx";

export default function UserCollection() {
  return (
    <div>
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <Collection />
      </div>
    </div>
  );
}
