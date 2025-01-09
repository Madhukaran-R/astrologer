import React, { useRef } from "react";
import StarryBackground from "../components/staryBackground";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import { Divider } from "@mui/material";
import AstroButton from "../components/AstroButton";
import LoginIcon from "@mui/icons-material/Login";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Home = () => {
  const targetRef = useRef(null);

  const handleSwipeUp = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ padding: "0 10px" }}>
      <StarryBackground />
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          margin: "5px",
        }}
      >
        <div className="heading-container">
          <h1 className="heading">Astrologger</h1>
          <Divider className="divider" />
          <p className="sub-heading">
            Written in the stars, guided by the cosmos—discover the path the
            universe has crafted for you.
          </p>
          <div className="topbar-container">
            <AstroButton title="Generate Kundli" icon={<FileDownloadIcon />} />
            <AstroButton title="Login" icon={<LoginIcon />} />
          </div>
        </div>

        <span className="swipe-up">
          <SwipeUpIcon className="icon" onClick={handleSwipeUp} /> Swipe Up
        </span>
      </div>
      <div ref={targetRef} className="section-2">

      </div>
    </div>
  );
};

export default Home;
