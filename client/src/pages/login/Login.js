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
          <div className="header">Log In</div>
          <div className="loginBox">
            <div className="loginTitle" htmlFor="username">
              Email
            </div>
            <input
              type="text"
              name="username"
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

            <div className="lowerForm">
              <span className="loginForgot">Forgot Password?</span>
              <button type="button" className="login-btn">
                Log In
              </button>
            </div>
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
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li className="copyright">© 2021 AlbumCover </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
