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
      dispatch({ type: SIGN_UP_EXISTS });
    } else {
      dispatch({ type: SIGN_UP_ERROR });
    }
  }
  //   try {
  //     let res = await fetch(
  //       "https://rsoni2843-travelgo.herokuapp.com/users/signup",
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(creds),
  //       }
  //     );
  //     const content = await res.json();
  //     console.log(content);
  //   } catch (error) {
  //     // if(error === )
  //     // throw new Error(error.message,"EOEOOE");

  //     // console.log(error === "SyntaxError")
  //     console.log(error === SyntaxError);
  //     // console.log(error === "SyntaxError: Unexpected token 'E', "Email already exists" is not valid JSON")
  //     // console.error(error.message,"ERRROR");
  //   }
};
export default signup;
