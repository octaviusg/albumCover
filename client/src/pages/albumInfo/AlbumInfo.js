import AlbumInfoCard from "../../components/albumInfoCard/AlbumInfoCard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileBottomNav from "../../components/mobileBottomNav/MobileBottomNav";
import BackBtn from "../../components/backbtn/BackBtn";

export default function AlbumInfo({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div>
      <Topbar />

      <MobileNav />
      <div className="bodyContent">
        <Sidebar />

        <BackBtn />
        <AlbumInfoCard key={posts._id} posts="" />
      </div>
      <MobileBottomNav />
    </div>
  );
}
