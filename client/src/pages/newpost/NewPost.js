import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NewPostForm from "../../components/newpostform/NewPostForm";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileBottomNav from "../../components/mobileBottomNav/MobileBottomNav";

export default function NewPost() {
  return (
    <div>
      <Topbar />
      <MobileNav />
      <div className="bodyContent">
        <Sidebar />
        <NewPostForm />
      </div>
      <MobileBottomNav />
    </div>
  );
}
