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
      const res = await axios.get("/posts/collection/" + username);

      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="gridCollection">
      {posts.map((p) => (
        <GridItem key={p._id} post={p} />
      ))}
    </div>
  );
}
