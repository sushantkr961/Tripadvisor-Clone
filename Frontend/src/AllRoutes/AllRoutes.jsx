import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HotelListG } from '../Components/Gaurav/HotelListG';
import { SingleRestaurant } from '../Components/Gaurav/SingleRestaurant';
import Home from '../Components/Sushant/Home';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/hotellist" element={<HotelListG/>}/>
            <Route path="/hotelpage" element={<SingleRestaurant/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes