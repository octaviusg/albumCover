import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Signup from "./pages/signup/Signup";
import About from "./pages/about/About";
import HelpCenter from "./pages/helpcenter/HelpCenter";
import TermsOfService from "./pages/termsofservice/TermsOfService";
import Advertising from "./pages/advertising/Advertising";
import UserCollection from "./pages/usercollection/UserCollection";
import NewPost from "./pages/newpost/NewPost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Landing />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">{user ? <Redirect to="/" /> : <Signup />}</Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/collection/:username">
          <UserCollection />
        </Route>
        <Route path="/new-album">
          <NewPost />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/helpcenter">
          <HelpCenter />
        </Route>
        <Route path="/termsofservice">
          <TermsOfService />
        </Route>
        <Route path="/advertising">
          <Advertising />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
