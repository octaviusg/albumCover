import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="topbarLanding">
        <div className="branding">hi-fi cover</div>
        <div className="signupBtnContainer">
          <button className="signUpBtnNew">Sign Up</button>
        </div>
      </div>
      <div className="bodyContainerLogin">
        <div className="loginformwrap">
          <div className="header">Login</div>
          <div className="box">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
              />
            </div>

            <button type="button" className="login-btn">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footerNav">
          <ul>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Advertising </a>
            </li>
            <li>© 2021 AlbumCover </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
