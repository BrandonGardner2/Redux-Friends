import React, { useRef } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

const CreateFriend = props => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const nameRefValue = nameRef.current.value;
    const ageRefValue = ageRef.current.value;
    const emailRefValue = emailRef.current.value;

    if (nameRefValue && ageRefValue !== 0 && emailRefValue) {
      const newFriend = {
        name: nameRefValue,
        age: Number(ageRefValue),
        email: emailRefValue
      };

      props.addFriend(newFriend);
      // .then(() => props.history.push("/"))
      // .catch(e => alert("Something went wrong..."));
    } else {
      alert("Please fill out all of the fields!");
    }
  };

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <input placeholder="Friend Name" ref={nameRef} />
      <input placeholder="Friend Age" ref={ageRef} type="number" />
      <input placeholder="Friend email" ref={emailRef} />
      <button>Add Friend!</button>
    </form>
  );
};

export default connect(
  null,
  { addFriend }
)(CreateFriend);
