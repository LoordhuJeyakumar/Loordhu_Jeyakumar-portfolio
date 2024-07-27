import { useEffect, useState } from "react";
import SideNavBar from "./components/SideNavBar";
import About from "./pages/About";
import { ThemeProvider } from "./themeContext";
import Skills from "./pages/Skills";
import Preloader from "./components/Preloader";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <ThemeProvider>
      <>
        <div>
          <Preloader />

          <AppRoutes />
        </div>
      </>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
