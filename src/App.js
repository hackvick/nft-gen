// import './App.css';
import "./style/styles.css";
// import OnBoard from "./MyComponents/OnBoarding/OnBoard";
import { HomePage } from "./MyComponents/homepage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OnBoard } from "./context/GlobalContext";

function App() {
  return (
    <>
      <Router>
        <OnBoard>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </OnBoard>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
