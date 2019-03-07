import React, { useRef, useEffect } from "react";

const UpdateFriend = props => {
  useEffect(() => {
    nameRef.current.value = name;
    ageRef.current.value = age;
    emailRef.current.value = email;
  }, []);

  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const updateFriendToDB = props.updateFriendToDB;

  const { name, age, email } = props.location.state.friend;

  const handleSubmit = e => {
    e.preventDefault();
    const nameRefValue = nameRef.current.value;
    const ageRefValue = ageRef.current.value;
    const emailRefValue = emailRef.current.value;

    if (nameRefValue && ageRefValue !== 0 && emailRefValue) {
      updateFriendToDB(nameRefValue, Number(ageRefValue), emailRefValue)
        .then(res => props.history.push("/"))
        .catch(e => alert("Something went wrong..."));
    } else {
      alert("Please fill out all of the fields!");
    }
  };

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <input placeholder="Friend Name" ref={nameRef} placeholder={"update"} />
      <input
        placeholder="Friend Age"
        ref={ageRef}
        type="number"
        placeholder={"update"}
      />
      <input placeholder="Friend email" ref={emailRef} placeholder={"update"} />
      <button>Add Friend!</button>
    </form>
  );
};

export default UpdateFriend;
