import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "./actions/index";

import "./App.css";
import Loading from "./views/Loading";
import FriendsView from "./views/FriendsView";
import LogIn from "./views/LogIn";

class App extends Component {
  state = {
    communicating: this.props.communicating,
    authenticated: this.props.authneticated,
    friends: this.props.friends,
    error: this.props.error
  };
  componentDidMount() {
    this.props.startLogin();
  }

  render() {
    if (this.props.communicating) {
      return <Loading />;
    }
    return (
      <div className="app">
        {this.props.authneticated ? <FriendsView /> : <LogIn />}
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
  { startLogin }
)(App);
