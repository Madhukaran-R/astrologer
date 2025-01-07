import React from "react";
import StarryBackground from "./staryBackground";

let Layout = ({ children }) => {
  return (
    <div className="AppContainer">
      <StarryBackground />
      {children}
    </div>
  );
};

export default Layout;
