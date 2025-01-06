import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/about", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>About</h1>
      <span>
        api response:- <b>{data}</b>
      </span>
      <br />
      <br />
      <a href="/"> home page</a>
    </div>
  );
};
export default About;
