import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "./actions/index";

import "./App.css";
import Loading from "./views/Loading";
import FriendsView from "./views/FriendsView";
import LogIn from "./views/LogIn";

class App extends Component {
  componentDidMount() {
    this.props.startLogin();
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        {this.props.loading ? (
          <Loading />
        ) : this.props.authneticated ? (
          <FriendsView />
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
  { startLogin }
)(App);
