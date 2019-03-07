import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { startLogin, checkAuth } from "../actions";

const LogIn = props => {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  useEffect(() => {
    props.checkAuth();
    if (props.authenticated) {
      props.history.push("/friends");
    }
  }, []);

  const sendLogin = e => {
    e.preventDefault();
    props
      .startLogin({
        username,
        password
      })
      .then(() => {
        console.log("success");
      });
  };

  return (
    <form onSubmit={e => sendLogin(e)} className="login-view">
      <input
        placeholder="Username"
        onChange={e => updateUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={e => updatePassword(e.target.value)}
      />
      <button>Log In</button>
    </form>
  );
};

const mapStateToProps = ({ authenticated, communicating, error }) => ({
  authenticated,
  communicating,
  error
});

export default connect(
  mapStateToProps,
  { startLogin, checkAuth }
)(LogIn);
