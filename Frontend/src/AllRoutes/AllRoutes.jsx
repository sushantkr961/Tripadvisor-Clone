import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Homepage/Pages/Home";
import Bihar from "../Components/Homepage/Pages/Bihar";
import ErrorPage from "../Components/Homepage/Pages/ErrorPage";
import HotelList from "./../Components/AdminDashboard/HotelList/Hotellist";
import HotelDetails from "../Components/Homepage/Pages/HotelDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TravellerDetails from "../Components/Ravi/TravellerDetails";
import PaymentDetails from "../Components/Ravi/PaymentDetails";
import AdminAddHotel from "../Components/AdminDashboard/AdminAddHotel";
import Maharashtra from "../Components/Homepage/Pages/Maharastra";
import Rajasthan from "../Components/Homepage/Pages/Rajasthan";
import MadhyaPradesh from "../Components/Homepage/Pages/MadhyaPradesh";
import Kerela from "../Components/Homepage/Pages/Kerela";
import Assam from "../Components/Homepage/Pages/Assam";
import Jammu from "../Components/Homepage/Pages/Jammu";
import Uttrakhand from "../Components/Homepage/Pages/Uttrakhand";
import UttarPradesh from "../Components/Homepage/Pages/UttarPradesh";
import Profile from "./../Components/UserLogin/Profile/Profile";
import Login from "../Components/UserLogin/Users/Login";

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
        <Route path={"/maharastratourism"} element={<Maharashtra />} />
        <Route path={"/rajasthantourism"} element={<Rajasthan />} />
        <Route path={"/madhyapradeshtourism"} element={<MadhyaPradesh />} />
        <Route path={"/kerelatourism"} element={<Kerela />} />
        <Route path={"/assamtourism"} element={<Assam />} />
        <Route path={"/uttrakhandtourism"} element={<Uttrakhand />} />
        <Route path={"/jammutourism"} element={<Jammu />} />
        <Route path={"/uttarpradeshtourism"} element={<UttarPradesh />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/userdetails"} element={<TravellerDetails />} />

        <Route
          path={"/payment"}
          element={
            <PrivateRoute>
              <PaymentDetails />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path={"/addhotel"} element={<AdminAddHotel />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
