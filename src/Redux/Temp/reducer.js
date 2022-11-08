import { INC } from "./actionTypes";

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INC: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}

export { reducer };
