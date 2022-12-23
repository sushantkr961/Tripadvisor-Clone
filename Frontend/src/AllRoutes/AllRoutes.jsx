import React from "react";
import { Route, Routes } from "react-router-dom";
import { HotelList } from "../Components/HotelList/Hotellist";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";
import Profile from "../Components/Nipendra/Profile/Profile";
import Bihar from "../Components/Sushant/Pages/Bihar";
import ErrorPage from "../Components/Sushant/Pages/ErrorPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/hotellist"} element={<HotelList />} />
        <Route path={"/profile/*"} element={<Profile />} />
        <Route path={"/bihartourism"} element={<Bihar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
