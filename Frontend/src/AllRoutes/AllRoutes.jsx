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
import AdminAddHotel from "../Components/AdminDashboard/AdminAddHotel";
import Maharashtra from "../Components/Sushant/Pages/Maharastra";
import Rajasthan from "../Components/Sushant/Pages/Rajasthan";
import MadhyaPradesh from "../Components/Sushant/Pages/MadhyaPradesh";
import Kerela from "../Components/Sushant/Pages/Kerela";
import Assam from "../Components/Sushant/Pages/Assam";
import Jammu from "../Components/Sushant/Pages/Jammu";
import Uttrakhand from "../Components/Sushant/Pages/Uttrakhand";
import UttarPradesh from "../Components/Sushant/Pages/UttarPradesh";
import { SingleUser } from "../Components/AdminDashboard/SingleUserPage";

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
        {/* <Route path={"/userdetails/:id"} element={<SingleUser />} /> */}

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
