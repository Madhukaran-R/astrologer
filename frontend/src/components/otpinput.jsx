import React, { useState, useRef, useEffect } from "react";
import { TextField, Box, Button } from "@mui/material";

function OTPInput({ length = 6, onComplete }) {
    const resendtimer = 3;
    const [timeLeft, setTimeLeft] = useState(resendtimer * 60);
    const [isActive, setIsActive] = useState(true);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }

        if (timeLeft <= resendtimer * 60 - 150) {
            setCanResend(true);
        }

        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const handleResend = () => {
        setCanResend(false);
        setTimeLeft(resendtimer * 60);
        setIsActive(true);
        // onResend();
    };
    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (index, event) => {
        const value = event.target.value.replace(/\D/g, "");

        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(0, 1);
        setOtp(newOtp);

        if (index < length - 1 && value) {
            inputRefs.current[index + 1].focus();
        }

        if (newOtp.join("").length === length) {
            onComplete(newOtp.join(""));
        }
    };

    const handleBackspace = (index, event) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (event) => {
        const pasteData = event.clipboardData.getData("text").replace(/\D/g, "");
        if (pasteData.length === length) {
            setOtp([...pasteData]);
            onComplete(pasteData);
        }
    };

    return (
        <>
            <Box display="flex" gap={1} justifyContent="center" onPaste={handlePaste}>
                {otp.map((value, index) => (
                    <TextField
                        key={index}
                        type="text"
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleBackspace(index, e)}
                        inputProps={{
                            maxLength: 1,
                            style: { textAlign: "center", fontSize: "20px", width: "40px" },
                        }}
                        variant="outlined"
                    />
                ))}
            </Box>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleResend}
                disabled={!canResend}
                style={{ marginTop: "10px" }}
            >
                Resend OTP {!canResend && "in " + formatTime()}
            </Button>
        </>
    );
}

export default OTPInput;
