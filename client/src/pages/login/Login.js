import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
              autoComplete="off"
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
              autoComplete="off"
              ref={password}
            />

            <div className="lowerForm">
              <span className="loginForgot">Forgot Password?</span>
              <button type="submit" className="login-btn">
                {isFetching ? (
                  <CircularProgress color="white" size="10px" />
                ) : (
                  "Log In"
                )}
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
