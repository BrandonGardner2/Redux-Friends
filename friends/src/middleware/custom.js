import { LOGIN_SUCCESS } from "../actions";

const token =
  "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ";

const customMiddleware = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("userToken", token);
  }
  next(action);
};

export default customMiddleware;
