import React from "react";
import SinglePost from "../singlepost/SinglePost.jsx";
import "./feed.css";

import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feedContainer">
      {Posts.map((p) => (
        <SinglePost key={p.id} post={p} />
      ))}
    </div>
  );
}
