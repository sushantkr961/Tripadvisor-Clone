const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0622d4b3c1mshb8050fdbde09e8dp1507cbjsn5fda11920bd7",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  },
};

const getData = (info) => (dispatch) => {
  fetch(
    `https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=${info}&currency=USD&locale=en_US`,
    options
  )
    .then((response) => response.json())
    .then((res) => console.log(res))

    .catch((err) => console.error(err));
};

export default getData;
