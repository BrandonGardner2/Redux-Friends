import axios from "axios";

export const GET_FRIENDS = "GET_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const startLogin = () => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
    .post("http://localhost:5000/api/login", {
      username: "Lambda School",
      password: "i<3Lambd4"
    })
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem("token", JSON.stringify(res.data.payload));
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE });
      console.log(err.response);
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS });
  axios
    .get("http://localhost:5000/api/friends/")
    .then(res => {
      dispatch({ type: SUCCESS });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: FAILURE });
      console.log(err.response);
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios
    .post()
    .then(res => {
      dispatch({ type: SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FAILURE });
    });
};

export const updateFriend = (id, friend) => dispatch => {
  dispatch({ type: UPDATE_FRIEND });
  axios
    .put()
    .then(res => {
      dispatch({ type: SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FAILURE });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete()
    .then(res => {
      dispatch({ type: SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FAILURE });
    });
};
