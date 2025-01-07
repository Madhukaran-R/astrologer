import React from "react";

const SvgComponent = () => {
  return (
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="5"
        y1="50"
        x2="130"
        y2="50"
        stroke="#8B4513"
        stroke-width="2"
        stroke-linecap="round"
      />

      <circle cx="5" cy="50" r="3" fill="#FFD700" />

      <circle cx="130" cy="50" r="3" fill="#FFD700" />

      <text
        x="20"
        y="45"
        fontSize="20"
        fill="#7800af"
        className="heading"
      >
        Astrologger !
      </text>

      <circle cx="10" cy="25" r="2" fill="#FFD700" />
      <circle cx="20" cy="60" r="2" fill="#FFD700" />
      <circle cx="120" cy="60" r="2" fill="#FFD700" />
      <circle cx="125" cy="25" r="2" fill="#FFD700" />
      <line x1="10" y1="25" x2="20" y2="60" stroke="#FFD700" stroke-width="1" />
      <line
        x1="20"
        y1="60"
        x2="120"
        y2="60"
        stroke="#FFD700"
        stroke-width="1"
      />
      <line
        x1="120"
        y1="60"
        x2="125"
        y2="25"
        stroke="#FFD700"
        stroke-width="1"
      />
    </svg>
  );
};

{
  /* <text x="100" y="50" fontSize="10" textAnchor="middle" fill="#7800af" className="heading">
Astrologger !
</text> */
}
const Home = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {/* <h1 className="heading">Astrologger !</h1> */}
        <SvgComponent />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
