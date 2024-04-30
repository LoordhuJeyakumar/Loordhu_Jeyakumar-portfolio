import { useEffect, useState } from "react";
import SideNavBar from "./components/SideNavBar";
import About from "./pages/About";
import { ThemeProvider } from "./themeContext";
import Skills from "./pages/Skills";
import Preloader from "./components/Preloader";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <>
        <div>
          <Preloader />

          <AppRoutes />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
