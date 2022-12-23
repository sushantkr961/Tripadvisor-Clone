import React from "react";
import SimpleSidebar from "./ProfileComponent";
import { Route, Routes } from "react-router-dom";
import Address from "./ProfileAllPages/Address";
import Orders from "./ProfileAllPages/Orders";
import Account from "./ProfileAllPages/Account";
import Support from "./ProfileAllPages/Support";
import { UserListpage } from "../../AdminDashboard/UserListpage";

const Profile = () => {
  return (
    <>
      <SimpleSidebar>
        <Routes>
          <Route path={"/account"} element={<Account />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/address"} element={<Address />} />
          <Route path={"/support"} element={<Support />} />
          <Route path={"/admin"} element={<UserListpage />} />
        </Routes>
      </SimpleSidebar>
    </>
  );
};

export default Profile;
