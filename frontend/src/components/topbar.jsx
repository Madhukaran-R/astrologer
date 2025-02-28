import React, { useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, SwipeableDrawer } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";
import LoginModal from "./loginModal";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function Topbar() {
    const loginDetails = useContext(UserContext);
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
                    <h1 className="topbar-logo" onClick={() => goto("/")}>Astrologger</h1>
                </div>
                <div className="topbar-right">
                    <ul className="topbar-menu">
                        <li className="menu-item" onClick={() => goto("/")}>Home</li>
                        <li className="menu-item" onClick={() => goto("/about")}>About</li>
                        <li className="menu-item" onClick={() => goto("/services")}>Services</li>
                        <li className="menu-item" onClick={() => goto("/contact")}>Contact</li>
                        <li className="menu-item">
                            {loginDetails._currentValue.loggedIn === false ?
                                <Button onClick={loginDetails._currentValue.Login} startIcon={<LoginIcon />} variant="contained"> Login</Button> :
                                <Button onClick={loginDetails._currentValue.Logout} startIcon={<LogoutIcon />} variant="contained"> Logout</Button>}
                        </li>
                    </ul>
                </div>
            </div>
            <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
                <ul className="drawer-menu">
                    <li className="drawer-item" onClick={() => goto("/")}>Home</li>
                    <li className="drawer-item" onClick={() => goto("/about")}>About</li>
                    <li className="drawer-item" onClick={() => goto("/services")}>Services</li>
                    <li className="drawer-item" onClick={() => goto("/contact")}>Contact</li>
                    <li className="drawer-item" onClick={() => goto("/saved-kundli")}>Saved Kundli</li>
                    <li className="drawer-item">
                        {loginDetails._currentValue.loggedIn === false ?
                            <span onClick={loginDetails._currentValue.Login}>Login</span> :
                            <span onClick={loginDetails._currentValue.Logout}>Logout</span>}
                    </li>
                </ul>
            </SwipeableDrawer>
            <LoginModal loginDetails={loginDetails} viewModal={!loginDetails._currentValue.loggedIn} />
        </div>
    );
}

export default Topbar;