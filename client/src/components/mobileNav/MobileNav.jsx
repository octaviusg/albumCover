import React from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

import "./mobilenav.css";

export default function MobileNav() {
  return (
    <div className="mobileNavContainer">
      <div className="branding">
        <Link className="brandLink" to="/">
          <span className="brandingmobile">hi-fi cover </span>
        </Link>
      </div>

      <div className="navLines">
        <CgMenuRight className="mobileMenu" />
      </div>
    </div>
  );
}
