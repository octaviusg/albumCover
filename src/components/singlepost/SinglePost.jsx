import React from "react";
import "./singlePost.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Users } from "../../dummyData";

export default function SinglePost({ post }) {
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
          <div className="bookmarkIcon">
            <BookmarkBorderIcon className="postBookmarIcon" />
          </div>
        </div>
        <img src={post.photo} alt="" className="postImg" />
      </div>
    </div>
  );
}
