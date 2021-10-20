import React, { useState, useEffect } from "react";
import "./gridItem.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="grid-itemCo">
      <Link to={`/${post._id}`}>
        <img
          oncontextmenu="return false"
          src={post.catNum}
          alt=""
          className="gridImg"
        />
      </Link>
    </div>
  );
}
