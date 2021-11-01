import { useState, useEffect, useContext } from "react";
import "./singlePost.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import blankProfile from "../blank-profile.png";

export default function SinglePost({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [click, setClick] = useState(false);
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

  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const onClickC = () => setShowText(false);

  const Text = () => (
    <div className="postMenu">
      <div className="pMenuItem">
        <Link className="pmenulink">Delete post</Link>
      </div>
      <div className="pMenuItem">
        <Link className="pmenulink">Report post</Link>
      </div>
    </div>
  );

  return (
    <div className="feedContainer">
      <div className="postCard">
        <div className="postHeader">
          {showText ? (
            <HiOutlineDotsHorizontal className="bmark" onClick={onClickC} />
          ) : (
            <HiOutlineDotsHorizontal className="bmark" onClick={onClick} />
          )}

          {showText ? <Text /> : null}

          <div className="bookmarks">
            <Link className="link" to={`/profile/${user.username}`}>
              <div className="author">
                <img
                  src={user.profilePicture || blankProfile}
                  alt=""
                  className="authorImg"
                />

                <span className="authorName">{user.username}</span>
              </div>
            </Link>
            <div className="bookmarkIcon" />

            {isLiked ? (
              <BsBookmarkFill className="bmark" onClick={likeHandler} />
            ) : (
              <BsBookmark className="bmark" onClick={likeHandler} />
            )}
          </div>
        </div>
        <Link to={`/album-info/${post._id}`}>
          <img src={post.catNum} alt="" className="postImg" />
        </Link>
      </div>
    </div>
  );
}
