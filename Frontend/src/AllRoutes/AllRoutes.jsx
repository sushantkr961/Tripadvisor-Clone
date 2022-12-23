import React from "react";
import { Route, Routes } from "react-router-dom";
import { HotelList } from "../Components/HotelList/Hotellist";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";
import HotelDetails from "../Components/Sushant/Pages/HotelDetails";
import Profile from "../Components/Nipendra/Profile/Profile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/hotellist"} element={<HotelList />} />
        <Route path={"/hoteldetails"} element={<HotelDetails />} />
        <Route path={"/profile/*"} element={<Profile />} />
      </Routes>
    </div>
  );
};

export default AllRoutes
