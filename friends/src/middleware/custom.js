import { LOGIN_SUCCESS } from "../actions";

const customMiddleware = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    const token = action.payload;
    localStorage.setItem("userToken", token);
  }
  next(action);
};

export default customMiddleware;
