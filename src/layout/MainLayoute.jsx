import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayoute = () => {
  return (
    <div>
      {/* Navber */}
      <Navbar />

      {/* Outlet */}
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>

      <div className="mt-11">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayoute;
