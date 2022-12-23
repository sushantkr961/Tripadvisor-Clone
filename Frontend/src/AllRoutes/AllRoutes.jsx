import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";
import Profile from "../Components/Nipendra/Profile/Profile";
import AdminAddHotel from "../Components/AdminDashboard/AdminAddHotel";
import Bihar from "../Components/Sushant/Pages/Bihar";
import ErrorPage from "../Components/Sushant/Pages/ErrorPage";
import HotelList from "./../Components/AdminDashboard/HotelList/Hotellist";
import HotelDetails from "../Components/Sushant/Pages/HotelDetails";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/hotels"} element={<HotelList />} />
        <Route path={"/hotels/:id"} element={<HotelDetails />} />
        <Route path={"/profile/*"} element={<Profile />} />
        <Route path={"/addhotel"} element={<AdminAddHotel />} />
        <Route path={"/bihartourism"} element={<Bihar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
