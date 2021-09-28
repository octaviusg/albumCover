import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NewPostForm from "../../components/newpostform/NewPostForm";

export default function NewPost() {
  return (
    <div>
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <NewPostForm />
      </div>
    </div>
  );
}
