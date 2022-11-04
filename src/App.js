// import './App.css';
import "./style/styles.css";
// import OnBoard from "./MyComponents/OnBoarding/OnBoard";
import { HomePage } from "./MyComponents/homepage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetStarted from "./MyComponents/GetStarted/GetStarted";
import { NftProvider } from "./MyComponents/context/NftProvider";
import { Main } from "./MyComponents/GetStarted/Main/Main";
import { OnBoard } from "./context/GlobalContext";

function App() {
  return (
    <NftProvider>
      <Router>
        <OnBoard>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/getStarted" element={<GetStarted />}></Route>
            <Route path="/mainPage" element={<Main />}></Route>
          </Routes>
        </OnBoard>
        <ToastContainer />
      </Router>
    </NftProvider>
  );
}

export default App;
