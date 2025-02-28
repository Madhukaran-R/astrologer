import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import OTPInput from "./otpinput";

const LoginModal = (props) => {
    const [number, setNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const SendOtp = () => {
        setOtpSent(true);
    }

    const VerifyOtp = () => {
        setOtpSent(false);
        setNumber("");
        props.loginDetails._currentValue.Login();
    };

    return (
        <Modal open={props.viewModal}>
            <div className="login-modal">
                <h2>Welcome Back,User</h2>
                <p>Discover the World's best community of interior designers</p>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                    <Button variant="outlined" size="small" color="black" startIcon={<GoogleIcon />}> Log in with Google</Button>
                    <Button variant="outlined" size="small" color="black" startIcon={<FacebookIcon />}> Log in with Facebook</Button>
                </div>
                <p style={{ textAlign: "center" }}>OR</p>
                <b>Log in with your Mobile</b>
                <hr />
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {otpSent ?
                        <>
                            <OTPInput />
                            <p>OTP Sent to {number}!!!</p>setOtpSent
                            <Button variant="contained" onClick={VerifyOtp} endIcon={<KeyboardDoubleArrowRightIcon className="blink" />}>Verify</Button>
                        </>
                        :
                        <>
                            <TextField type="number" id="login_mobile" name="login_mobile" placeholder="Mobile Number" variant="outlined" value={number} onChange={(e) => { setNumber(e.target.value) }} />
                            <Button variant="contained" onClick={SendOtp} endIcon={<KeyboardDoubleArrowRightIcon className="blink" />}>Login</Button>
                        </>
                    }

                </div>
            </div>
        </Modal>
    )
}


export default LoginModal;