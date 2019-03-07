import axios from "axios";
import axiosAuth from "../auth/";

export const GET_FRIENDS = "GET_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const checkAuth = () => dispatch => {
  const correctToken =
    "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ";
  const token = localStorage.getItem("userToken");
  if (correctToken === token) {
    dispatch({ type: AUTH_SUCCESS });
  } else {
    dispatch({ type: AUTH_FAIL });
  }
};

export const startLogin = payload => dispatch => {
  dispatch({ type: START_LOGIN });
  return axios
    .post("http://localhost:5000/api/login/", payload)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error });
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS });
  axiosAuth()
    .get("http://localhost:5000/api/friends/")
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err.response.data.error });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  return axiosAuth()
    .post("http://localhost:5000/api/friends", friend)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err.response.error.data });
      console.log(err);
    });
};

export const updateFriend = (id, friend) => dispatch => {
  dispatch({ type: UPDATE_FRIEND });
  return new Promise((resolve, reject) => {
    axiosAuth()
      .put(`http://localhost:5000/api/friends/${id}/`, friend)
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data });
        resolve();
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: err.response.error.data });
        reject();
      });
  });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axiosAuth()
    .delete(`http://localhost:5000/api/friends/${id}/`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err.response.error.data });
    });
};
