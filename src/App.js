import React from "react";
import Home from "./components/Home";
import Login from "./components/utils/Login";
import Signup from "./components/utils/Signup";
import Instructions from "./components/layout/Instructions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./config/auth";
import PrivateRoute from "./components/utils/PrivateRoute";
import Questionbox1 from "./components/Package2/Questionbox2";
import Questbox from "./components/package1/Questbox";
import Result from "./components/utils/Result/Result";
import Result2 from "./components/utils/Result/Result2";
import ResultA from "./components/utils/Result/ResultA";
import Pack3 from "./components/package3/Pack3";
import Questbox3 from "./components/package3/Questbox3";
import Team from "./components/shiva/Team";
import Services from "./components/vineeth/components/Ourservices/Services";
import Mentors from "./components/layout/Mentors";
import Mentors2 from "./components/layout/Mentors2";
import Package from "./components/layout/Package";
import NavBar from "./components/NavBar";
import { AuthContext } from "./config/auth";
import Councelling from "./components/utils/Councelling";
import Result3 from "./components/utils/Result/Result3";
import Profile from "./components/profile/Profile";
import InterOne from "./components/Inter/InterOne";
import InterTwo from "./components/Inter/InterTwo";
import "./App.css";
import Events from "./components/layout/event";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <div>
        <AuthProvider>
          <Router>
            <div>
              <AuthContext.Consumer>
                {(context) =>
                  context.userId == null ? (
                    <>
                      <NavBar />
                      <Switch>
                        <Route exact path="/register" component={Signup} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/mentors2" component={Mentors2} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/Events" component={Events} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/packages" component={Package} />
                      </Switch>
                    </>
                  ) : (
                    <>
                      <NavBar />
                      <Switch>
                        <PrivateRoute
                          exact
                          path="/profile"
                          component={Profile}
                        />
                        <PrivateRoute exact path="/Events" component={Events} />

                        <PrivateRoute
                          exact
                          path="/pack3/skills"
                          component={Pack3}
                        />
                        <PrivateRoute
                          exact
                          path="/councelling"
                          component={Councelling}
                        />
                        <PrivateRoute
                          exact
                          path="/instructions"
                          component={Instructions}
                        />
                        <PrivateRoute
                          exact
                          path="/mentors"
                          component={Mentors}
                        />
                        <PrivateRoute
                          exact
                          path="/mentors2"
                          component={Mentors2}
                        />

                        <PrivateRoute
                          exact
                          path="/services"
                          component={Services}
                        />
                        <PrivateRoute
                          exact
                          path="/question/:id"
                          component={Questionbox1}
                        />
                        <PrivateRoute
                          exact
                          path="/packages"
                          component={Package}
                        />
                        <PrivateRoute exact path="/result" component={Result} />
                        <PrivateRoute
                          exact
                          path="/result2"
                          component={Result2}
                        />
                        <PrivateRoute
                          exact
                          path="/resultA"
                          component={ResultA}
                        />
                        <PrivateRoute
                          exact
                          path="/result3"
                          component={Result3}
                        />
                        <PrivateRoute
                          exact
                          path="/question3/:id"
                          component={Questbox3}
                        />
                        <PrivateRoute
                          exact
                          path="/questions/:id"
                          component={Questbox}
                        />
                        <PrivateRoute
                          exact
                          path="/questionIn/:id"
                          component={InterOne}
                        />
                        <PrivateRoute
                          exact
                          path="/questionsIn/:id"
                          component={InterTwo}
                        />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="mentors2" component={Mentors2} />
                      </Switch>
                    </>
                  )
                }
              </AuthContext.Consumer>
            </div>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}
