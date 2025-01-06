import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);

  let login = () => {
    fetch("/auth/login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => console.error(err));
  };

  let logout = () => {
    fetch("/auth/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Home</h1>
      <span>
        api response:- <b>{data}</b>
      </span>
      <br />
      <br />
      <a href="/about"> about page</a>
      <br />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
