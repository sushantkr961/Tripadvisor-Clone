import AllRoutes from "./AllRoutes/AllRoutes";
import Footer from "./Components/Homepage/Components/Footer";
import Navbar from "./Components/Homepage/Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
