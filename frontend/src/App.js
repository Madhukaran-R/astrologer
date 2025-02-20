import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { createContext, useEffect, useState } from "react";
import { PostAPICall } from "./utils/network";
import { Backdrop, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const UserContext = createContext();

// , #f0df20, #4b4737, #b0ab99
const theme = createTheme({
  palette: {
    primary: {
      main: "#f0df20",
      dark: "#d4c11a",
      light: "#f8e74d",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#d4c11a",
          },
        },
      },
    },
  },
});
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
