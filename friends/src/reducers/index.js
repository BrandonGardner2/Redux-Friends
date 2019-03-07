import {
  GET_FRIENDS,
  UPDATE_FRIEND,
  ADD_FRIEND,
  DELETE_FRIEND,
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SUCCESS,
  FAILURE
} from "../actions/index";

const initialState = {
  authenticated: false,
  communicating: false,
  error: null,
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        communicating: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        communicating: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authenticated: false,
        communicating: false
      };
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        communicating: true
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        communicating: true
      };
    case ADD_FRIEND:
      return {
        ...state,
        communicating: true
      };
    case DELETE_FRIEND:
      return {
        ...state,
        communicating: true
      };
    case SUCCESS:
      return {
        ...state,
        communicating: false,
        authenticated: true,
        friends: action.payload,
        error: ""
      };
    case FAILURE:
      return {
        ...state,
        communicating: false,
        error: action.payload
      };
    default:
      return state;
  }
};
