import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UserProfile from "../../components/userprofile/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=tavo`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

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
