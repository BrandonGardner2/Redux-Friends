import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { updateFriend } from "../actions";

const UpdateFriend = props => {
  useEffect(() => {
    nameRef.current.value = name;
    ageRef.current.value = age;
    emailRef.current.value = email;
  }, []);

  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const { name, age, email, id } = props.location.state.friend;

  const handleSubmit = e => {
    e.preventDefault();
    const nameRefValue = nameRef.current.value;
    const ageRefValue = ageRef.current.value;
    const emailRefValue = emailRef.current.value;

    const newFriend = {
      name: nameRefValue,
      age: Number(ageRefValue),
      email: emailRefValue
    };

    if (nameRefValue && ageRefValue !== 0 && emailRefValue) {
      props
        .updateFriend(id, newFriend)
        .then(() => props.history.push("/friends"));
    } else {
      alert("Please fill out all of the fields!");
    }
  };

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <input placeholder="Friend Name" ref={nameRef} />
      <input placeholder="Friend Age" ref={ageRef} type="number" />
      <input placeholder="Friend email" ref={emailRef} />
      <button>Update Friend</button>
    </form>
  );
};

export default connect(
  null,
  { updateFriend }
)(UpdateFriend);
