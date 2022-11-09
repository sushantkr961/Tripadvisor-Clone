import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Temp/reducer";

export const store = legacy_createStore(
  combineReducers({
    temp: reducer,
  }),
  compose(applyMiddleware(thunk))
);
