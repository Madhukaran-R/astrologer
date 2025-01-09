import React, { useRef } from "react";
import StarryBackground from "../components/staryBackground";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import { Divider } from "@mui/material";
import AstroButton from "../components/AstroButton";
import LoginIcon from "@mui/icons-material/Login";
import FileDownloadIcon from "@mui/icons-material/FileDownload";


const Kundli = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 400 400">
      <rect x="50" y="50" width="300" height="300" fill="none" stroke="black" stroke-width="2" />

      <line x1="50" y1="200" x2="200" y2="50" stroke="black" stroke-width="1" />
      <line x1="200" y1="50" x2="350" y2="200" stroke="black" stroke-width="1" />
      <line x1="50" y1="200" x2="200" y2="350" stroke="black" stroke-width="1" />
      <line x1="200" y1="350" x2="350" y2="200" stroke="black" stroke-width="1" />

      <line x1="125" y1="50" x2="125" y2="350" stroke="black" stroke-width="1" />
      <line x1="275" y1="50" x2="275" y2="350" stroke="black" stroke-width="1" />
      <line x1="50" y1="125" x2="350" y2="125" stroke="black" stroke-width="1" />
      <line x1="50" y1="275" x2="350" y2="275" stroke="black" stroke-width="1" />

      <text x="90" y="90" font-size="14" text-anchor="middle">1</text>
      <text x="200" y="90" font-size="14" text-anchor="middle">12</text>
      <text x="310" y="90" font-size="14" text-anchor="middle">11</text>
      <text x="90" y="200" font-size="14" text-anchor="middle">2</text>
      <text x="310" y="200" font-size="14" text-anchor="middle">10</text>
      <text x="90" y="310" font-size="14" text-anchor="middle">3</text>
      <text x="200" y="310" font-size="14" text-anchor="middle">4</text>
      <text x="310" y="310" font-size="14" text-anchor="middle">9</text>
      <text x="150" y="150" font-size="14" text-anchor="middle">5</text>
      <text x="250" y="150" font-size="14" text-anchor="middle">8</text>
      <text x="150" y="250" font-size="14" text-anchor="middle">6</text>
      <text x="250" y="250" font-size="14" text-anchor="middle">7</text>
    </svg>
  );
};
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
        <div className="content">
          <h2 className="heading">What is Astrology?</h2>
          <p className="sub-heading">
            Astrology is the study of the movements and relative positions of
            celestial bodies interpreted as having an influence on human
            affairs and the natural world. Astrology is a pseudoscience that
            claims to divine information about human affairs and terrestrial
            events by studying the movements and relative positions of celestial
            objects.
          </p>
        </div>
        <div className="content-image">
        </div>
      </div>
      <div ref={targetRef} className="section-2">
        <div className="content-image">
          <Kundli />
        </div>
        <div className="content">
          <h2 className="heading">What is Kundli?</h2>
          <p className="sub-heading">
            A Kundli, also known as a birth chart or horoscope, is a detailed astrological diagram that maps the positions of celestial bodies at the exact time, date, and place of a person’s birth. It serves as a guiding tool in Vedic astrology, offering insights into various aspects of life such as personality, career, relationships, health, and spiritual growth. A Kundli consists of 12 houses (Bhavas), each representing specific life areas, along with the positions of the planets (Grahas) and zodiac signs (Rashis). It is often used for marriage compatibility analysis, career guidance, health predictions, and determining the timing of significant life events. By analyzing the Kundli, individuals can understand their strengths, challenges, and destiny better, making it an essential tool for those seeking clarity and direction in life. Create your personalized Kundli now to uncover the cosmic blueprint of your life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
