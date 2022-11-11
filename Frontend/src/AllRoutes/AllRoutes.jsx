import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckPage from "../Components/Nipendra/Users/CheckPage";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check" element={<CheckPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
