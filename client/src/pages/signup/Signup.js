import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="loginContainer">
      <div className="topbarLanding">
        <Link className="brandLink" to="/">
          <div className="branding">hi-fi cover</div>
        </Link>

        <div className="signupBtnContainer">
          <Link to="/login">
            <button className="signUpBtnNew">Login</button>
          </Link>
        </div>
      </div>
      <div className="bodyContainerLogin">
        <div className="loginformwrap">
          <div className="header">Sign up</div>
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
