import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import FriendsView from "./views/FriendsView";
import LogIn from "./views/LogIn";

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.error && (
          <div className="error-msg">{this.props.error}</div>
        )}

        <Switch>
          <Route path="/login" component={LogIn} />
          <PrivateRoute path="/friends" component={FriendsView} />
          <Redirect from="*" to="/friends" />
        </Switch>
      </div>
    );
  }
}

export default App;
