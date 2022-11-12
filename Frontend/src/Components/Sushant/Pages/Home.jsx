import React from 'react'
import Explore from '../Components/Explore';
import Footer from '../Components/Footer';
import IndiaTour from '../Components/IndiaTour';
import Navbar2 from '../Components/Navbar2';
import Searchbar from '../Components/Searchbar';
import Temple from '../Components/Temple';

const Home = () => {
  return (
    <>
      <Navbar2 />
      <Searchbar />
      <IndiaTour />
      <Explore />
      <Temple />
      <Footer />
    </>
  )
}

export default Home;