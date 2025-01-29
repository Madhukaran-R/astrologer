import React, { useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, SwipeableDrawer } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";


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
                        <li>
                            {loginDetails._currentValue.loggedIn === false ?
                                <Button size="small" className="a_btn" onClick={loginDetails._currentValue.Login}>Login</Button> :
                                <Button size="small" className="a_btn" onClick={loginDetails._currentValue.Logout}>Logout</Button>}
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
                            <Button size="small" className="a_btn" onClick={loginDetails._currentValue.Login}>Login</Button> :
                            <Button size="small" className="a_btn" onClick={loginDetails._currentValue.Logout}>Logout</Button>}
                    </li>
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