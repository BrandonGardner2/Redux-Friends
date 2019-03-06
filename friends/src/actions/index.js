import axios from "axios";

export const GET_FRIENDS = "GET_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS });
  axios
    .get()
    .then(res => {})
    .catch(err => {});
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios
    .get()
    .then(res => {})
    .catch(err => {});
};

export const updateFriend = friend => dispatch => {
  dispatch({ type: UPDATE_FRIEND });
  axios
    .get()
    .then(res => {})
    .catch(err => {});
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .get()
    .then(res => {})
    .catch(err => {});
};
