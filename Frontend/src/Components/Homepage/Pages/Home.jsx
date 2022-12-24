import React from "react";
import Explore from "../Components/Explore";
import GetOut from "../Components/GetOut";
import IndiaTour from "../Components/IndiaTour";
import Searchbar from "../Components/Searchbar";
import Temple from "../Components/Temple";

const Home = () => {
  return (
    <>
      <Searchbar />
      <IndiaTour />
      <GetOut />
      <Explore />
      <Temple />
    </>
  );
};

export default Home;
