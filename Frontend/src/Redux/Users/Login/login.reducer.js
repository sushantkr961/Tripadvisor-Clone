// import {
//   LOGIN_ERROR,
//   LOGIN_INCORRECT,
//   LOGIN_LOADING,
//   LOGIN_NOT_FOUND,
//   LOGIN_SUCCESS,
//   USER_LOGOUT,
// } from "./login.type";
import {
  LOGIN_ERROR_NOT_REGISTERED,
  LOGIN_ERROR,
  LOGIN_ERROR_EMPTY_FIELD,
  LOGIN_ERROR_INAVLID_DETAILS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  GET_LOGGED_USER,
} from "./login.type";
import { USER_LOGOUT } from "./login.type";

let token = localStorage.getItem("token");
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: !!token,
  errorMessage: "",
  successMessage: "",
  token: token || "",
  userInfo: [],
};
// let token = localStorage.getItem("token");

// const initialState = {
//   isAuth: !!token,
//   isLoading: false,
//   isError: false,
//   token: token || "",
//   noEmail: false,
//   incorrectEmail: false,
// };

function loginReducer(state = initialState, action) {
  // switch (action.type) {
  //   case LOGIN_LOADING: {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }
  //   case LOGIN_SUCCESS: {
  //     localStorage.setItem("token", action.payload);
  //     console.log(action.payload);
  //     return {
  //       ...initialState,
  //       isAuth: true,
  //       isLoading: false,
  //       wrongEmail: false,
  //       noEmail: false,
  //       isError: false,
  //       token: action.payload,
  //     };
  //   }
  //   case LOGIN_ERROR: {
  //     return {
  //       ...state,
  //       isError: true,
  //       isLoading: false,
  //     };
  //   }
  //   case LOGIN_INCORRECT: {
  //     return {
  //       ...initialState,
  //       incorrectEmail: true,
  //       isError: false,
  //       isLoading: false,
  //     };
  //   }
  //   case LOGIN_NOT_FOUND: {
  //     return {
  //       ...initialState,
  //       isLoading: false,
  //       isAuth: false,
  //       isError: false,
  //       noEmail: true,
  //       incorrectEmail: false,
  //     };
  //   }
  //   case USER_LOGOUT: {
  //     localStorage.removeItem("token");
  //     return {
  //       ...initialState,
  //       isLoading: false,
  //       isError: false,
  //       token: "",
  //       isAuth: false,
  //     };
  //   }
  //   default: {
  //     return state;
  //   }
  // }

  switch (action.type) {
    case LOGIN_LOADING: {
      console.log(state);
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      console.log(action.payload)
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        errorMessage: "",
        successMessage: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case LOGIN_ERROR_INAVLID_DETAILS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case LOGIN_ERROR_EMPTY_FIELD: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case LOGIN_ERROR_NOT_REGISTERED: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }

    case GET_LOGGED_USER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userInfo: action.payload,
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
