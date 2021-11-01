import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./albuminfocard.css";

import { BsBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

import BackBtn from "../backbtn/BackBtn";
import { AuthContext } from "../../context/AuthContext";

export default function AlbumInfoCard() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [tracks, setTrackList] = useState(null);
  const [name, setName] = useState(null);

  const [likes, setLikes] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const res = await axios.get(`/posts/album-info/${postId}`);
      setPost(res.data);
      setName(res.data.title);
      setTrackList(res.data.trackList);
      setLikes(res.data.likes);
    };

    fetchUserPosts();
  }, [postId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}

    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="albumInfoContainer">
      <div className="content">
        <BackBtn />
        <div className="albumHeader">
          <div className="at-anAtt">
            {name &&
              name
                .slice(0)
                .reverse()
                .map((t) => <div className="tt">{t}</div>)}
          </div>
          <div className="bookmark-Ainfo">
            {isLiked ? (
              <BsBookmarkFill className="bmark" onClick={likeHandler} />
            ) : (
              <BsBookmark className="bmark" onClick={likeHandler} />
            )}
          </div>
        </div>

        <div className="albumAtt">
          <img
            onContextMenu="return false"
            src={post.catNum}
            alt={post.title}
            className="albumInfoimg"
          />

          <div className="trackInfo">
            <div className="T-title">Track list</div>
            <div className="right">
              <div className="albumTrackInfo">
                <div class="column">
                  <table>
                    {tracks && tracks.map((t) => <td>{t.position}</td>)}
                  </table>
                </div>
                <div class="column">
                  <table>
                    {tracks &&
                      tracks.map((t) => <td className="titles">{t.title}</td>)}
                  </table>
                </div>
                <div class="column">
                  <table>
                    {tracks && tracks.map((t) => <td>{t.duration}</td>)}
                  </table>
                </div>
              </div>

              <div className="gnAtt">
                <div className="genreGroup">
                  <span className="greys">Genre</span>
                  {post.genre}
                </div>
                <div className="yearGroup">
                  <span className="greys">Year</span>
                  {post.year}
                </div>
                <div className="catnumberGroup">
                  <span className="greys">Cat &#8470;</span>
                  {post.catNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
