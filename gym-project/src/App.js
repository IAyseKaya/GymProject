import "./App.css";
import MainPage from "./MainPage/main-page.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route index element={<MainPage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
