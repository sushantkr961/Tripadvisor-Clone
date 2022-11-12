import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./data.type";

const initialState = {
  isLoading: false,
  isError: false,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING: {
      return {
        ...state,
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default dataReducer;
