import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./explore.css";
import { Link } from "react-router-dom";

export default function Explore() {
  const [posts, setPosts] = useState(null);
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/posts/explore/${username}`);
      setPosts(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="exploreContainer">
      <Topbar />
      <div className="bodyContent">
        <Sidebar />

        <div className="grid">
          {posts &&
            posts.map((c) => (
              <div className="grid-item">
                <Link to={`/${c._id}`}>
                  <img
                    onContextMenu="return false"
                    src={c.catNum}
                    alt=""
                    className="gridImg"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
