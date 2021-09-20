import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";

import React from "react";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}