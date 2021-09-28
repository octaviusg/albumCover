import React from "react";
import { useContext, useEffect, useState } from "react";
import GridItem from "../gridItem/GridItem.jsx";
import axios from "axios";
import "./grid.css";
import { AuthContext } from "../../context/AuthContext";

export default function Grid({ username }) {
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
    <div className="grid">
      {posts.map((p) => (
        <GridItem key={p._id} post={p} />
      ))}
    </div>
  );
}
