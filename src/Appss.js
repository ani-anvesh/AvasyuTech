import React from "react";
import base from "./config/FbConfig";
import Home from "./components/Home";
import Login from "./components/utils/Login";
import Signup from "./components/utils/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./config/auth";
import PrivateRoute from "./components/utils/PrivateRoute";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Signup} />
              <PrivateRoute exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}
