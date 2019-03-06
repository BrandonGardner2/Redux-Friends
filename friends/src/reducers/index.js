import {
  GET_FRIENDS,
  UPDATE_FRIEND,
  ADD_FRIEND,
  DELETE_FRIEND
} from "../actions/index";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
};
