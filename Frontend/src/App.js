import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Components/Sushant/Components/Navbar";
import Footer from "./Components/Sushant/Components/Footer";

function App() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "0622d4b3c1mshb8050fdbde09e8dp1507cbjsn5fda11920bd7",
  //     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  //   },
  // };

  // fetch(
  //   "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=lucknow&lang=en_US&units=km",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response.data))
  //   .catch((err) => console.error(err));

  //   const options2 = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "0622d4b3c1mshb8050fdbde09e8dp1507cbjsn5fda11920bd7",
  //       "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     "https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US",
  //     options2
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
