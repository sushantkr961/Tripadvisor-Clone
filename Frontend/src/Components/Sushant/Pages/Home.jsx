import React from "react";
import Explore from "../Components/Explore";
import IndiaTour from "../Components/IndiaTour";
import Searchbar from "../Components/Searchbar";
import Temple from "../Components/Temple";

const Home = () => {
  return (
    <>
      <Searchbar />
      <IndiaTour />
      <Explore />
      <Temple />
    </>
  );
};

export default Home;
