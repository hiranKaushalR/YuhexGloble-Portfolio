import React from "react";
import Navbar from "../Home page/Navbar";
import Footer from "../Home page/Footer";
import { Outlet } from "react-router-dom";

function LayoutMain() {
  return (
    <div>
      <Headers />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LayoutMain;
