import React from "react";
import "../App.css";
import AstoButton from "./AstroButton";
import LoginIcon from "@mui/icons-material/Login";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

let Layout = ({ children }) => {
  return (
    <div className="AppContainer">
      <div className="topbar-container">
        <AstoButton title="Generate Kundli" icon={<FileDownloadIcon />} />
        <AstoButton title="Login" icon={<LoginIcon />} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
