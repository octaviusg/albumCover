import "./NewPostForm.css";
import PopUp from "../popup/PopUp";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function NewPostForm() {
  const { user } = useContext(AuthContext);
  const catNum = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    async function getImage() {
      const response = await fetch(
        `https://api.discogs.com/database/search?q=${catNum.current.value}&token=${process.env.REACT_APP_DISC_TK}`
      );
      const artwork = await response.json();
      const { results } = artwork;

      const albumArtwork = results[1].cover_image;
      const albumDetails = results[1].title;
      const albumGenre = results[1].style[0];
      const masterUrl = results[0].master_url;

      const newPost = {
        userId: user._id,
        catNum: albumArtwork,
        title: albumDetails,
        genre: albumGenre,
        masterUrl: masterUrl,
      };

      try {
        await axios.post("/posts", newPost);
      } catch (err) {}
    }

    getImage();
  };

  return (
    <div className="newPostContainer">
      <form className="postForm" onSubmit={submitHandler}>
        <div className="postInputs">
          <div className="postTitle" htmlFor="catalog number">
            Catalog number *
            <span className="catInfo">
              <PopUp />
            </span>
          </div>
          <input
            type="text"
            required
            name="text"
            placeholder=""
            className="post-input"
            ref={catNum}
          />
          <span className="formatInfo">
            <span className="contrast"> Examples: </span> EALC-07312
            <span className="contrast"> | </span> 8496061
            <span className="contrast"> | </span> AL-2309
          </span>
          <button type="submit" className="share-btn">
            Share
          </button>
        </div>
      </form>

      <img src="" alt="" />
    </div>
  );
}
