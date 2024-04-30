import React from "react";
import SideNavBar from "./SideNavBar";
import { Outlet } from "react-router";

function Wrapper({ children }) {
  return (
    <div className="row">
      <div className="col-lg-9 col-12">
        {children}
        <Outlet />
      </div>
      <div className="col-lg-3 col-12">
        <SideNavBar />
      </div>
    </div>
  );
}

export default Wrapper;
