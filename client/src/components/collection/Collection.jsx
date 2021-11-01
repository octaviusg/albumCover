import React from "react";
import "./collection.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Grid from "../grid/Grid";
import { VscSearch } from "react-icons/vsc";
import { BsVinyl } from "react-icons/bs";

function Collection() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="collectionContainer">
      <div className="cSearchContainer">
        <div className="searchBar">
          <VscSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search title, artist name."
            className="search"
          />
        </div>

        <div className="searchBtnsContainer">
          <button type="submit" className="genreBtn">
            [ a-z ] &#8595;
          </button>
          <button type="submit" className="genreBtn">
            year &#8595;
          </button>
          <button type="submit" className="genreBtn">
            genre
          </button>

          <button type="submit" className="genreBtn">
            Spin a random <BsVinyl className="vinylIcon" />
          </button>
        </div>
      </div>

      <Grid username={username} />
    </div>
  );
}

export default Collection;
