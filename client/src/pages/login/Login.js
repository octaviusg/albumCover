import { useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(password.current.value);
  };

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
          <form className="loginBox" onSubmit={handleClick}>
            <div className="loginTitle" htmlFor="email">
              Email
            </div>
            <input
              type="email"
              required
              name="email"
              className="login-input"
              autoComplete="new-password"
              ref={email}
            />

            <div className="loginTitle" htmlFor="password">
              Password
            </div>
            <input
              type="password"
              required
              minLength="6"
              name="password"
              className="login-input"
              autoComplete="new-password"
              ref={password}
            />

            <div className="lowerForm">
              <span className="loginForgot">Forgot Password?</span>
              <button type="submit" className="login-btn">
                Log In
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
