import React from "react";
import StarryBackground from "../components/staryBackground";
// import Paper from "@mui/material/Paper";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import { Divider } from "@mui/material";

const Home = () => {
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
        </div>

        <span className="swipe-up">
          <SwipeUpIcon className="icon" /> Swipe Up
        </span>
      </div>
      {/* <Paper elevation={3} style={{ height: "250px" }}></Paper> */}
    </div>
  );
};

export default Home;
