import "./App.css";
import MainPage from "./MainPage/main-page.jsx";
import Login from "./components/login";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
