import { SIGN_UP_ERROR, SIGN_UP_LOADING, SIGN_UP_SUCCESS } from "./signup.type";

const initialState = {
  isSignUp: false,
  isLoading: false,
  isError: false,
};

function signupReducer(state = { initialState }, action) {
  switch (action.type) {
    case SIGN_UP_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSignUp: true,
      };
    }

    case SIGN_UP_ERROR: {
      return {
        ...state,
        isError:true,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default signupReducer;
