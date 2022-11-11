import axios from "axios";
import {
  SIGN_UP_ERROR,
  SIGN_UP_EXISTS,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
} from "./signup.type";

const signup = (creds) => async (dispatch) => {
  dispatch({ type: SIGN_UP_LOADING });
  try {
    let res = await axios.post(
      "https://rsoni2843-travelgo.herokuapp.com/users/signup",
      creds
    );
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    if (error.response.data === "Email already exists") {
      return dispatch({ type: SIGN_UP_EXISTS, payload: error.response });
    } else {
      dispatch({ type: SIGN_UP_ERROR });
    }
  }
};
export default signup;
