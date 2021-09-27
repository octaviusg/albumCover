import React, { useState, useEffect, useContext } from "react";
import "./singlePost.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import axios from "axios";
import blankProfile from "../blank-profile.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function SinglePost({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="feedContainer">
      <div className="postCard">
        <div className="postHeader">
          <Link className="link" to={`profile/${user.username}`}>
            <div className="author">
              <img
                src={user.profilePicture || blankProfile}
                alt=""
                className="authorImg"
              />

              <span className="authorName">{user.username}</span>
            </div>
          </Link>
          <div className="bookmarks">
            {like}
            <div className="bookmarkIcon" />
            <BookmarkBorderIcon className="bmark" onClick={likeHandler} />
          </div>
        </div>
        <img src={PF + post.img} alt="" className="postImg" />
      </div>
    </div>
  );
}
