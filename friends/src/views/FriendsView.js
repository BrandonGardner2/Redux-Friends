import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFriends } from "../actions";

import Friend from "../components/Friend";
import Loading from "../views/Loading";

const FriendsView = props => {
  useEffect(() => {
    props.getFriends();
  }, []);

  if (props.communicating) {
    return <Loading />;
  }
  return (
    <div className="friends-view">
      <button>
        <NavLink to="/friends/createfriend">Add Friend</NavLink>
      </button>
      {props.friends &&
        props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
    </div>
  );
};

const mapStateToProps = ({ communicating, error, friends }) => ({
  communicating,
  error,
  friends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsView);
