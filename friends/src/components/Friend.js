import React from "react";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  const { removeFriendFromDB } = props;

  const removeFriend = () => {
    removeFriendFromDB(id);
  };

  if (!props.friend) {
    return <h2>Loading your friend...</h2>;
  }
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
