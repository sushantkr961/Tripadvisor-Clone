import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import dataReducer from "./DataHotel/data.reducer";
import { reducer } from "./Temp/reducer";
import loginReducer from "./Users/Login/login.reducer";
import signupReducer from "./Users/Signup/signup.reducer";

export const store = legacy_createStore(
  combineReducers({
    temp: reducer,
    signup: signupReducer,
    login: loginReducer,
    data: dataReducer,
  }),
  compose(applyMiddleware(thunk))
);
