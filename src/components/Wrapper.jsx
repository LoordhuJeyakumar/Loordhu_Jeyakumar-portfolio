import React from "react";
import SideNavBar from "./SideNavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";

function Wrapper({ children }) {
  return (
    <div className="row bg-light-background dark:bg-dark-background">
      <div className="col-lg-9 col-12">
        {children}
        <Outlet />
        <Footer />
      </div>

      <div className="col-lg-3 col-12">
        <SideNavBar />
      </div>
    </div>
  );
}

export default Wrapper;
