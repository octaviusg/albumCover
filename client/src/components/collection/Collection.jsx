import React from "react";
import "./collection.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import "./collection.css";

import Grid from "../grid/Grid";

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
      <Grid username={username} />
    </div>
  );
}

export default Collection;
