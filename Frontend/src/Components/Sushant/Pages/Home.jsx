import React from "react";
import Explore from "../Components/Explore";
import IndiaTour from "../Components/IndiaTour";
// import Navbar2 from "../Components/Navbar2";
import Searchbar from "../Components/Searchbar";
import Temple from "../Components/Temple";

const Home = () => {
  return (
    <>
      {/* <Navbar2 /> */}
      <Searchbar />
      <IndiaTour />
      <Explore />
      <Temple />
    </>
  );
};

export default Home;
