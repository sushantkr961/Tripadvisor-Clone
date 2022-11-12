import React from "react";
import { Route, Routes } from "react-router-dom";
import { HotelListG } from "../Components/Gaurav/HotelListG";
import { SingleRestaurant } from "../Components/Gaurav/SingleRestaurant";
import CheckPage from "../Components/Nipendra/Users/CheckPage";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check" element={<CheckPage />} />
        <Route path="/hotelPage" element={<SingleRestaurant />} />
        <Route path="/hotelLists" element={<HotelListG />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
