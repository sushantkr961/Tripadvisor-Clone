import React from 'react'
import IndiaTour from '../Components/IndiaTour';
import Navbar from '../Components/Navbar';
import Searchbar from '../Components/Searchbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <IndiaTour />
    </div>
  )
}

export default Home;