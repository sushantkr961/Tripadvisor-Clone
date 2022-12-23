import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";
import HotelDetails from "../Components/Sushant/Pages/HotelDetails";
import Profile from "../Components/Nipendra/Profile/Profile";
import HotelList from "./../Components/AdminDashboard/HotelList/Hotellist";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/hotels"} element={<HotelList />} />
        <Route path={"/hotels/:id"} element={<HotelDetails />} />
        <Route path={"/profile/*"} element={<Profile />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
