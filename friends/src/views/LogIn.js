import React, { useState } from "react";

const LogIn = props => {
  return (
    <form className="login-view">
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Log In</button>
    </form>
  );
};

LogIn.propTypes = {};

export default LogIn;
