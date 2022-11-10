import {
  SIGN_UP_ERROR,
  SIGN_UP_EXISTS,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
} from "./signup.type";

const initialState = {
  isSignUp: false,
  isLoading: false,
  isError: false,
  emailExists: false,
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        emailExists: false,
        isSignUp: true,
        
      };
    }

    case SIGN_UP_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case SIGN_UP_EXISTS: {
      return {
        ...state,
        isSignUp: false,
        isLoading: false,
        emailExists: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default signupReducer;
