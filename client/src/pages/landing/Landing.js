import React from "react";
import "./landing.css";
import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Landing() {
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
