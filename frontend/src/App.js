import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { createContext, useEffect, useState } from "react";
import { PostAPICall } from "./utils/network";
import { Backdrop, CircularProgress } from "@mui/material";

export const UserContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(false);

  const initLoader = (status) => {
    setLoader(status);
  };

  const loginDetails = createContext({
    loggedIn: login,
    Login: async () => {
      initLoader(true);
      let response = await PostAPICall("/api/login", {
        username: "admin",
        password: "admin",
      }).catch((err) => {
        alert(err);
        initLoader(false);
      });
      initLoader(false);
      if (response && response.errorCode === 1) {
        alert(response.error);
        setLogin(false);
        return;
      } else {
        setLogin(true);
        alert(response.message);
      }
    },
    Logout: async () => {
      initLoader(true);
      let response = await PostAPICall("/api/logout", {}).catch((err) => {
        alert(err);
        initLoader(false);
      });
      initLoader(false);
      if (response && response.errorCode === 1) {
        alert(response.error);
        return;
      } else {
        alert(response.message);
      }
      setLogin(false);
    },
    progress: initLoader,
  });

  useEffect(() => {
    if (document.cookie.includes("loggedin=true")) {
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
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loader}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
        <span>Loading........</span>
      </Backdrop>
    </UserContext.Provider>
  );
}

export default App;
