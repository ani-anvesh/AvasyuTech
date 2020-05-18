import React from "react";
import QuesPor from "./components/utils/QuesPor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./config/auth";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <QuesPor />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}
