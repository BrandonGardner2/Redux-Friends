import React, { useState } from "react";
import { connect } from "react-redux";

import { startLogin } from "../actions";

const LogIn = props => {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const sendLogin = e => {
    e.preventDefault();
    props.startLogin({
      username,
      password
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

export default connect(
  null,
  { startLogin }
)(LogIn);
