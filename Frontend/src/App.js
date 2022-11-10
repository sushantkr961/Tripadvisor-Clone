import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import { HotelListG } from "./Components/Gaurav/HotelListG";
import { SingleRestaurant } from "./Components/Gaurav/SingleRestaurant";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <HotelListG/> */}
      <SingleRestaurant/>
    </div>
  );
}

export default App;
