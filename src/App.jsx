import { ThemeProvider } from "./themeContext";

import Preloader from "./components/Preloader";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <Wrapper>
        <AppRoutes />
      </Wrapper>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
