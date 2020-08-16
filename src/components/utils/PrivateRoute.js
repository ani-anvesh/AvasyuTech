import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../config/auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <Route
          {...rest}
          render={(routeProps) =>
            context.userId !== null ? (
              <RouteComponent {...routeProps} />
            ) : (
              <Redirect to={"/login"} />
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};

export default PrivateRoute;
