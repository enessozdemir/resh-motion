import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  const location = useLocation();
  const hideHeaderAndFooter = ["/sign-in", "/sign-up"].includes(
    location.pathname
  );
  return (
    <div>
      {!hideHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
