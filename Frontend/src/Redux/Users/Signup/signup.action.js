import axios from "axios";
import { SIGN_UP_ERROR, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "./signup.type";

const signup = (creds) => async (dispatch) => {
  console.log(creds);
  dispatch({ type: SIGN_UP_LOADING });
  try {
    let res = axios.post(
      "https://rsoni2843-travelgo.herokuapp.com/users/signup",
      creds
    );
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
    console.log(res);
  } catch (e) {
    console.log(e);
    dispatch({ type: SIGN_UP_ERROR });
  }
};
export default signup;
