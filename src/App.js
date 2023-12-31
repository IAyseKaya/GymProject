import { useState } from "react";
import "./App.css";
import MainPage from "./MainPage/main-page.jsx";
import About from "./components/about";
import Appointment from "./components/appointment";
import GroupLessons from "./components/groupLessons";
import MembershipType from "./MainPage/membershipType";
import CalculateBMI from "./MainPage/calculateBMI";
import Login from "./components/login";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [theme, setTheme] = useState(true);

  const changeMode = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  return (
    <div
      id="body"
      className={theme ? "bg-black text-white" : "bg-white text-black "}
    >
      <BrowserRouter>
        <Navbar />
        <div className="sticky h-0  ml-40 bg-transparent top-6 z-50 cursor-pointer text-lg flex item-center justify-start border-spacing-1">
          <div className="inner relative">
            <label className="switch">
              <input
                type="checkbox"
                onClick={changeMode}
                onChange={(e) => {}}
                checked={theme == true}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="lessons" element={<GroupLessons />} />
          <Route path="membership" element={<MembershipType />} />
          <Route path="calculator" element={<CalculateBMI />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
