import {
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS,
  EMPTY_INPUT,
  HOTEL_LIST_ERROR,
  HOTEL_LIST_LOADING,
  HOTEL_LIST_SUCCESS,
  HOTEL_SINGLE_ERROR,
  HOTEL_SINGLE_LOADING,
  HOTEL_SINGLE_SUCCESS,
} from "./data.type";

const initialState = {
  isLoading: false,
  isError: false,
  debData: [],
  dataofList: [],
  singleData: [],
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        debData: action.payload,
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case HOTEL_LIST_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case HOTEL_LIST_SUCCESS: {
      return {
        ...state,
        dataofList: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case HOTEL_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case HOTEL_SINGLE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case HOTEL_SINGLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleData: action.payload,
      };
    }
    case HOTEL_SINGLE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case EMPTY_INPUT: {
      return {
        ...state,
        debData: [],
        isLoading: false,
        isError: false,
      };
    }

    default:
      return state;
  }
}

export default dataReducer;
