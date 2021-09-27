import { useContext, useEffect, useState } from "react";
import React from "react";
import SinglePost from "../singlepost/SinglePost.jsx";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
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
    <div className="feedContainer">
      {posts.map((p) => (
        <SinglePost key={p._id} post={p} />
      ))}
    </div>
  );
}
