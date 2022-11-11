import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_INCORRECT,
  LOGIN_LOADING,
  LOGIN_NOT_FOUND,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./login.type";

const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post(
      "https://travelgo-rsoni2843.onrender.com/users/login",
      creds
    );
    dispatch({ type: LOGIN_SUCCESS, payload: JSON.stringify(res.data) });
    return res.data;
  } catch (error) {
    if (error.response.data === "Incorrect email or password") {
      dispatch({ type: LOGIN_INCORRECT });
    } else if (error.response.data === "User with this email not found!!") {
      dispatch({ type: LOGIN_NOT_FOUND });
    } else {
      dispatch({ type: LOGIN_ERROR });
    }
  }
};

export const logout = () => ({ type: USER_LOGOUT });

export default login;
