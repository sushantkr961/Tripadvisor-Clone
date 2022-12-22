import React from "react";
import { Route, Routes } from "react-router-dom";
import { HotelList } from "../Components/HotelList/Hotellist";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";
import HotelDetails from "../Components/Sushant/Pages/HotelDetails";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/hotellist"} element={<HotelList/>}/>
        <Route path={"/hoteldetails"} element={<HotelDetails />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
