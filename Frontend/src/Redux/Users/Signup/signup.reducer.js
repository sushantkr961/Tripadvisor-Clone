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
  errorMessage: "",
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
        isSignUp: true,
        errorMessage: action.payload,
      };
    }

    case SIGN_UP_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case SIGN_UP_EXISTS: {
      return {
        ...state,
        isSignUp: false,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default signupReducer;
