import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from "@mui/material";
import { useNavigate } from 'react-router-dom';



function Topbar() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    let goto = (link) => {
        navigate(link);
        setOpen(false);
    }

    return (
        <div className="topbar">
            <div className="topbar-container">
                <div className="topbar-left">
                    <MenuIcon className="menu-icon" onClick={() => setOpen(true)} />
                    <h1 className="topbar-logo">Astrologger</h1>
                </div>
                <div className="topbar-right">
                    <ul className="topbar-menu">
                        <li className="menu-item" onClick={() => goto("/")}>Home</li>
                        <li className="menu-item" onClick={() => goto("/about")}>About</li>
                        <li className="menu-item" onClick={() => goto("/services")}>Services</li>
                        <li className="menu-item" onClick={() => goto("/contact")}>Contact</li>
                    </ul>
                </div>
            </div>
            <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <ul className="drawer-menu">
                    <li className="drawer-item" onClick={() => goto("/")}>Home</li>
                    <li className="drawer-item" onClick={() => goto("/about")}>About</li>
                    <li className="drawer-item" onClick={() => goto("/services")}>Services</li>
                    <li className="drawer-item" onClick={() => goto("/contact")}>Contact</li>
                </ul>
            </SwipeableDrawer>
        </div>
    );
}

// css from drawer item
// .drawer-menu {
//     list-style-type: none;
//     padding: 0;
//     margin: 0;
//     width: 200px;
// }

// .drawer-item {
//     padding: 10px;
//     cursor: pointer;
// }



export default Topbar;