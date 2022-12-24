import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Nipendra/Users/Login";
import Home from "../Components/Sushant/Pages/Home";
import Profile from "../Components/Nipendra/Profile/Profile";
import Bihar from "../Components/Sushant/Pages/Bihar";
import ErrorPage from "../Components/Sushant/Pages/ErrorPage";
import HotelList from "./../Components/AdminDashboard/HotelList/Hotellist";
import HotelDetails from "../Components/Sushant/Pages/HotelDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TravellerDetails from "../Components/Ravi/TravellerDetails";
import PaymentDetails from "../Components/Ravi/PaymentDetails";
import AdminAddHotel from "../Components/AdminDashboard/AdminAddHotel"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/hotels"} element={<HotelList />} />
        <Route path={"/hotels/:id"} element={<HotelDetails />} />
        <Route
          path={"/profile/*"}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path={"/bihartourism"} element={<Bihar />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/userdetails"} element={<TravellerDetails />} />
        <Route path={"/payments"} element={<PaymentDetails />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path={"/addhotel"} element={<AdminAddHotel />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
