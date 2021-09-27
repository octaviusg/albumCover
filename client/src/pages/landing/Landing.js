import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landingContainer">
      <div className="topbarLanding">
        <Link className="brandLink" to="/">
          <div className="branding">hi-fi cover</div>
        </Link>

        <div className="loginBtnContainer">
          <Link to="/login">
            <button to="/login" className="loginBtn">
              Log In
            </button>
          </Link>
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
        </div>

        <div className="landingRegisterWrap">
          <div className="loginBox">
            <div className="loginTitle" htmlFor="username">
              Name
            </div>
            <input
              type="text"
              name="username"
              className="login-input"
              autoComplete="new-password"
            />

            <div className="loginTitle" htmlFor="password">
              Email
            </div>
            <input
              type="email"
              name="email"
              className="login-input"
              autoComplete="new-password"
            />
            <div className="loginTitle" htmlFor="password">
              Password
            </div>
            <input
              type="password"
              name="password"
              className="login-input"
              autoComplete="new-password"
            />
            <div className="loginTitle" htmlFor="password">
              Re-enter Password
            </div>
            <input
              type="password"
              name="password"
              className="login-input"
              autoComplete="new-password"
            />
            <div className="lowerForm">
              <span className="placeholder"></span>
              <button type="button" className="login-btn">
                Sign up
              </button>
            </div>
          </div>
        </div>
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
