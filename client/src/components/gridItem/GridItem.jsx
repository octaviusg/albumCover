import React, { useState, useEffect } from "react";
import "./gridItem.css";
import axios from "axios";

export default function GridItem({ post }) {
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);

      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="grid-item">
      <img
        oncontextmenu="return false"
        src={post.catNum}
        alt=""
        className="postImg"
      />
    </div>
  );
}
