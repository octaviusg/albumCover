import "./NewPostForm.css";
import PopUp from "../popup/PopUp";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

export default function NewPostForm() {
  const { user } = useContext(AuthContext);
  const catNum = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    async function getImage() {
      const response = await fetch(
        `https://api.discogs.com/database/search?q=${catNum.current.value.trim()}&token=${
          process.env.REACT_APP_DISC_TK
        }`
      );

      const artwork = await response.json();
      const { results } = artwork;

      const albumArtwork = results[0].cover_image;
      const albumDetails = results[0].title.split(/[-]+/).map((s) => s.trim());
      const albumGenre = results[0].style[0];
      const masterUrl = results[0].master_url;
      const year = results[0].year;
      const catNumber = results[0].catno;

      const data = await fetch(masterUrl);
      const list = await data.json();
      const { tracklist } = list;

      const theList = tracklist;

      // allow array
      const allTracks = [];

      // Populate  array
      for (const title in theList) {
        allTracks.push(theList[title]);
      }

      const newPost = {
        userId: user._id,
        catNumber: catNumber,
        catNum: albumArtwork,
        title: albumDetails,
        genre: albumGenre,
        masterUrl: masterUrl,
        year: year,
        trackList: allTracks,
      };

      try {
        await axios.post("/posts", newPost);
        history.push("/");
      } catch (err) {}
    }

    getImage();
  };

  return (
    <div className="newPostContainer">
      <form className="postForm" onSubmit={submitHandler}>
        <div className="postInputs">
          <div className="postTitle" htmlFor="catalog number">
            Catalog number <span className="red">*</span>
            <span className="catInfo">
              <PopUp />
            </span>
          </div>
          <input
            type="text"
            required
            autoComplete="off"
            name="text"
            placeholder=""
            className="post-input"
            ref={catNum}
          />
          <span className="formatInfo">
            <span className="contrast"> Examples: </span>
            8496061
            <span className="contrast"> | </span> AL-2309
          </span>
          <button type="submit" className="share-btn">
            {loading ? (
              <CircularProgress color="inherit" size="10px" />
            ) : (
              "Share"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
