import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-16 pb-12 overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Body;
