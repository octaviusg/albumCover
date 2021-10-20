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
        <Link className="brandLink" to="/">
          <div className="branding">hi-fi cover</div>
        </Link>

        <div className="signupBtnContainer">
          <Link to="/signup">
            <button className="signUpBtnNew">Sign Up</button>
          </Link>
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
              ref={password}
            />

            <div className="lowerForm">
              <Link className="loginForgotLink" to="/about">
                <span className="loginForgot">Forgot Password ?</span>
              </Link>

              <button type="submit" className="login-btn">
                {isFetching ? (
                  <CircularProgress color="inherit" size="10px" />
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
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/"> Advertising</Link>
            </li>
            <li>© 2021 AlbumCover </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
