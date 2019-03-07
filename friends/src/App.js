import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import FriendsView from "./views/FriendsView";
import LogIn from "./views/LogIn";
import CreateFriend from "./components/CreateFriend";
import UpdateFriend from "./components/UpdateFriend";

const App = props => {
  return (
    <div className="app">
      {props.error && <div className="error-msg">{props.error}</div>}

      <Switch>
        <Route path="/login" component={LogIn} />
        <PrivateRoute exact path="/friends" component={FriendsView} />
        <PrivateRoute path="/friends/createfriend" component={CreateFriend} />
        <PrivateRoute
          path="/friends/updatefriend/:id"
          component={UpdateFriend}
        />
        <Redirect from="*" to="/friends" />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ error }) => ({ error });

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
