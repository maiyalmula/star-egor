import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";
import PeoplePage from "../PeoplePage/PeoplePage";
import HomePage from "./../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import "./styles.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" exact element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
