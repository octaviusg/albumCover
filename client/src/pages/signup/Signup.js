import axios from "axios";
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const history = useHistory();

  const registerHandleClick = async (e) => {
    e.preventDefault();
    if (rePassword.current.value !== password.current.value) {
      rePassword.current.setCustomValidity("Both passwords must match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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

          <form className="loginBox" onSubmit={registerHandleClick}>
            <div className="loginTitle" htmlFor="username">
              Name
            </div>
            <input
              type="text"
              ref={username}
              name="username"
              className="login-input"
              autoComplete="off"
            />

            <div className="loginTitle" htmlFor="password">
              Email
            </div>
            <input
              type="email"
              ref={email}
              name="email"
              className="login-input"
              autoComplete="off"
            />
            <div className="loginTitle" htmlFor="password">
              Password
            </div>
            <input
              type="password"
              ref={password}
              name="password"
              className="login-input"
              autoComplete="off"
            />
            <div className="loginTitle" htmlFor="password">
              Re-enter Password
            </div>
            <input
              type="password"
              ref={rePassword}
              name="password"
              className="login-input"
              autoComplete="off"
            />
            <div className="lowerForm">
              <span className="placeholder"></span>
              <button type="submit" className="login-btn">
                Sign up
              </button>
            </div>
          </form>
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
