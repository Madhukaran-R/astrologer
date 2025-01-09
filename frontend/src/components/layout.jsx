import React from "react";
import "../App.css";


let Layout = ({ children }) => {
  return (
    <div className="AppContainer">
      {children}
    </div>
  );
};

export default Layout;
