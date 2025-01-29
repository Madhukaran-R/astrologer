import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function App() {
  const [login, setLogin] = useState(false);

  const loginDetails = createContext({
    loggedIn: login,
    Login: () => {
      alert("Login Successful!");
      localStorage.setItem("login", true);
      setLogin(true);
    },
    Logout: () => {
      alert("Loggedout Successful!");
      localStorage.removeItem("login");
      setLogin(false);
    },
  });

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLogin(true);
    }
  }, [login, loginDetails]);

  return (
    <UserContext.Provider value={loginDetails}>
      <Router basename="/astrologer">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Comming Soon</h1>} />
          </Routes>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
