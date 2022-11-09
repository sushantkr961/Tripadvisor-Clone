import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
