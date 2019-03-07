import React from "react";

import Friend from "../components/Friend";

const FriendsView = props => {
  return (
    <div className="friends-view">
      {props.friends &&
        props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
    </div>
  );
};

export default FriendsView;
