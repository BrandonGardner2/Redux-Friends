import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { deleteFriend } from "../actions";

const Friend = props => {
  const { name, age, email, id } = props.friend;

  const removeFriend = () => {
    props.deleteFriend(id);
  };

  if (!props.friend) {
    return <h2>Loading your friend...</h2>;
  }
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button>
        <NavLink
          to={{
            pathname: `/friends/updatefriend/${id}`,
            state: { friend: props.friend }
          }}
        >
          Update Friend
        </NavLink>
      </button>
      <button onClick={removeFriend}>Remove Friend</button>
    </div>
  );
};

export default connect(
  null,
  { deleteFriend }
)(Friend);
