import React from "react";
import { VscSearch } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";

import "./mobilecollectsearch.css";

export default function MobileCollecSearch() {
  return (
    <div className="MobileCollecSearchContainer">
      <div className="searchBar">
        <VscSearch className="searchIcon" />
        <input
          type="text"
          placeholder="Search title, artist name."
          className="search"
        />
      </div>

      <div className="mobilesearchBtnsContainer">
        <VscSettings />
      </div>
    </div>
  );
}
