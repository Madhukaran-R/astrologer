import React from "react";
import "../App.css";
import Topbar from "./topbar";
import Footer from "./footer";

let Layout = ({ children }) => {
  return (
    <div className="AppContainer">
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
