import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin, getFriends } from "./actions/index";

import "./App.css";
import Loading from "./views/Loading";
import FriendsView from "./views/FriendsView";
import LogIn from "./views/LogIn";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.communicating) {
      return <Loading />;
    }
    return (
      <div className="app">
        {this.props.error && (
          <div className="error-msg">{this.props.error}</div>
        )}
        {this.props.authenticated ? (
          <FriendsView friends={this.props.friends} />
        ) : (
          <LogIn />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authenticated, communicating, error, friends }) => ({
  authenticated,
  communicating,
  error,
  friends
});

export default connect(
  mapStateToProps,
  { startLogin, getFriends }
)(App);
