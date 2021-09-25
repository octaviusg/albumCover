import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landingContainer">
      <div className="topbarLanding">
        <div className="branding">hi-fi cover</div>
        <div className="loginBtnContainer">
          <button className="loginBtn">Log In</button>
        </div>
      </div>
      <div className="bodyContainer">
        <div className="tagLine">
          <span className="mainTag">
            <p>We are</p>
            <p>here to recognize </p>
            <p>LP artwork.</p>
          </span>
          <span className="lowertag">
            <p>Share your music collection and keep track</p>
            <p>of what has been purchased.</p>
          </span>
          <button className="signUpBtn">Sign Up</button>
        </div>

        <img src="./assets/disc.svg" alt="" className="contentImg" />
      </div>
      <div className="footer">
        <div className="footerNav">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/helpcenter">Help Center</Link>
            </li>
            <li>
              <Link to="/termsofservice">Terms of Service</Link>
            </li>
            <li>
              <Link to="/advertising"> Advertising</Link>
            </li>
            <li>© 2021 AlbumCover </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
