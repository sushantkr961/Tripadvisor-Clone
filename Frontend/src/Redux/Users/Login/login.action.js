import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { facebookProvider, googleAuth, googleProvider } from "./firebase";

import {
  GET_LOGGED_USER,
  LOGIN_ERROR,
  LOGIN_ERROR_EMPTY_FIELD,
  LOGIN_ERROR_INAVLID_DETAILS,
  LOGIN_ERROR_NOT_REGISTERED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./login.type";

const login = (info) => async (dispatch) => {
  const loginUrl = "https://travelgo-backend.vercel.app/user/login";
  // dispatch({ type: LOGIN_LOADING });
  // try {
  //   let res = await axios.post(
  //     "https://heroku-rsoni2843.vercel.app/users/login",
  //     creds
  //   );
  //   dispatch({ type: LOGIN_SUCCESS, payload: JSON.stringify(res.data.user) });
  //   return res.data;
  // } catch (error) {
  //   if (error.response.data === "Incorrect email or password") {
  //     dispatch({ type: LOGIN_INCORRECT });
  //   } else if (error.response.data === "User with this email not found!!") {
  //     dispatch({ type: LOGIN_NOT_FOUND });
  //   } else {
  //     dispatch({ type: LOGIN_ERROR });
  //   }
  // }
  dispatch({ type: LOGIN_LOADING });
  // On Success
  try {
    let res = await axios.post(loginUrl, info);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.Token });

    return res;
  } catch (err) {
    // All Errors Here

    const status = err.response.status;
    const errorMessage = err.response.data.Message;

    if (status === 401) {
      dispatch({ type: LOGIN_ERROR_INAVLID_DETAILS, payload: errorMessage });
    }
    if (status === 405) {
      dispatch({ type: LOGIN_ERROR_NOT_REGISTERED, payload: errorMessage });
    }
    if (status === 406) {
      dispatch({ type: LOGIN_ERROR_EMPTY_FIELD, payload: errorMessage });
    } else {
      dispatch({ type: LOGIN_ERROR, payload: errorMessage });
    }
  }
};
export const getUser = (info) => async (dispatch) => {
  const loggedUserUrl = "https://travelgo-backend.vercel.app/user/loggedUser";

  axios.defaults.headers.common["authorization"] = `Bearer ${info}`;

  try {
    let res = await axios.get(loggedUserUrl);

    dispatch({ type: GET_LOGGED_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  signInWithPopup(googleAuth, googleProvider)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: JSON.stringify(res._tokenResponse),
      });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      console.log(err);
    });
};

export const signInWithFacebook = () => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  signInWithPopup(googleAuth, facebookProvider)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: JSON.stringify(res._tokenResponse),
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logout = () => ({ type: USER_LOGOUT });

export default login;
