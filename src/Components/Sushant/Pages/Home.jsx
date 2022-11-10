import React from 'react'
import Explore from '../Components/Explore';
import IndiaTour from '../Components/IndiaTour';
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Searchbar from '../Components/Searchbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Searchbar />
      <IndiaTour />
      <Explore />
    </div>
  )
}

export default Home;