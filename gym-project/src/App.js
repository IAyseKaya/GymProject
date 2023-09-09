import "./App.css";
import MainPage from "./MainPage/main-page.jsx";
import About from "./components/about";
import Login from "./components/login";
import Navbar from "./components/navbar/Navbar.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
