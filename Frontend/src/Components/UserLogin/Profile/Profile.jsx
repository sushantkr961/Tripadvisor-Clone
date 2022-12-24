import React from "react";
import SimpleSidebar from "./ProfileComponent";
import { Route, Routes } from "react-router-dom";
import Address from "./ProfileAllPages/Address";
import Orders from "./ProfileAllPages/Orders";
import Account from "./ProfileAllPages/Account";
import Support from "./ProfileAllPages/Support";
import { UserListpage } from "../../AdminDashboard/UserListpage";
import { SingleUser } from "../../AdminDashboard/SingleUserPage";
import AdminAddHotel from "../../AdminDashboard/AdminAddHotel";

const Profile = () => {
  return (
    <>
      <SimpleSidebar>
        <Routes>
          <Route path={"/account"} element={<Account />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/cart"} element={<Address />} />
          <Route path={"/support"} element={<Support />} />
          <Route path={"/admin"} element={<UserListpage />} />
          <Route path={"/adminHotel"} element={<AdminAddHotel />} />

          <Route path={"/admin/:id"} element={<SingleUser />} />
        </Routes>
      </SimpleSidebar>
    </>
  );
};

export default Profile;
