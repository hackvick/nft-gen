// import './App.css';
import "./style/styles.css"
import {HomePage} from './MyComponents/homepage/HomePage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
    <ToastContainer />
   </Router>
  
   </>
  );
}

export default App;
