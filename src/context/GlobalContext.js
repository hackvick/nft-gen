import { createContext, useState, useContext } from "react";
// import FeedbackData from '../data/FeedbackData';
const GlobalContext = createContext();
export const OnBoard = ({ children }) => {
  const [forget, setForget] = useState(false);
  const [sign,setSign]=useState(false);
  const [show,setShow] = useState(false);

  const value = { forget, setForget,sign,setSign,show,setShow };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export function useOnboard() {
  return useContext(GlobalContext);
}
