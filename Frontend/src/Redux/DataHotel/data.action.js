import {
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS,
  EMPTY_INPUT,
  HOTEL_LIST_ERROR,
  HOTEL_LIST_LOADING,
  HOTEL_LIST_SUCCESS,
} from "./data.type";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d6c55ae0acmsh6919efe90353c96p1826a9jsn0a94af5e897a",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const getData = (info) => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  fetch(
    `https://travel-advisor.p.rapidapi.com/locations/search?query=${info}&limit=30&offset=0&units=km&location_id=1&currency=INR&sort=relevance&lang=en_US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: DATA_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
      console.error(err);
    });
};
export const emptyData = () => ({ type: EMPTY_INPUT });

export const hotelList = (info) => (dispatch) => {
  dispatch({ type: HOTEL_LIST_LOADING });
  fetch(
    `https://travel-advisor.p.rapidapi.com/hotels/list?location_id=${info}&adults=1&rooms=1&nights=2&offset=0&currency=USD&order=asc&limit=30&sort=recommended&lang=en_US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      dispatch({ type: HOTEL_LIST_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: HOTEL_LIST_ERROR });
    });
};
// fetch(
//   "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=lucknow&lang=en_US&units=km",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response.data))
//   .catch((err) => console.error(err));

export default getData;
