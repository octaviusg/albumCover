import { useEffect, useState } from "react";
import React from "react";
import SinglePost from "../singlepost/SinglePost.jsx";
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/611b333fe18f322e06887ee8");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feedContainer">
      {posts.map((p) => (
        <SinglePost key={p._id} post={p} />
      ))}
    </div>
  );
}
