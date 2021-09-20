import React, { useState } from "react";
import "./singlePost.css";

import { Users } from "../../dummyData";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";

export default function SinglePost({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="feedContainer">
      <div className="postCard">
        <div className="postHeader">
          <div className="author">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="authorImg"
            />
            <span className="authorName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
          </div>
          <div className="bookmarkIcon" />
          <BookmarkBorderIcon />
        </div>
        <img src={post.photo} alt="" className="postImg" />
      </div>
    </div>
  );
}
