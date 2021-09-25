import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Signup from "./pages/signup/Signup";
import About from "./pages/about/About";
import HelpCenter from "./pages/helpcenter/HelpCenter";
import TermsOfService from "./pages/termsofservice/TermsOfService";
import Advertising from "./pages/advertising/Advertising";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>

        <Route path="/landing">
          <Landing />
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
