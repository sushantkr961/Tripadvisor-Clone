import {
  LOGIN_ERROR,
  LOGIN_INCORRECT,
  LOGIN_LOADING,
  LOGIN_NOT_FOUND,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./login.type";
let token = localStorage.getItem("token");

const initialState = {
  isAuth: !!token,
  isLoading: false,
  isError: false,
  token: token || "",
  noEmail: false,
  incorrectEmail: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", action.payload);
      console.log(action.payload);
      return {
        ...initialState,
        isAuth: true,
        isLoading: false,
        wrongEmail: false,
        noEmail: false,
        isError: false,
        token: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case LOGIN_INCORRECT: {
      return {
        ...initialState,
        incorrectEmail: true,
        isError: false,
        isLoading: false,
      };
    }
    case LOGIN_NOT_FOUND: {
      return {
        ...initialState,
        isLoading: false,
        isAuth: false,
        isError: false,
        noEmail: true,
        incorrectEmail: false,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...initialState,
        isLoading: false,
        isError: false,
        token: "",
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default loginReducer;
