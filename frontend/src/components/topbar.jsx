import React from "react";
import MenuIcon from '@mui/icons-material/Menu';


function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-container">
                <div className="topbar-left">
                    <MenuIcon className="menu-icon" />
                    <h1 className="topbar-logo">Astrologger</h1>
                </div>
                <div className="topbar-right">
                    <ul className="topbar-menu">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">About</li>
                        <li className="menu-item">Services</li>
                        <li className="menu-item">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Topbar;