import React, { createContext, useState, useEffect,useContext } from "react";
import axios from "axios";
import { GET_COLLECTIONS } from "../../Api/Api";

export const GlobalNftContext = createContext();

export const NftProvider = ({ children }) => {
  const [layerId, setLayerId] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const [collectionData, setCollectionData] = useState([])
  const [loader, setLoader] = useState(false) 
  const [login,setlogin] = useState(false) 

  useEffect(() => {
    getCollections();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[collectionId,setCollectionData,layerId]);

  const token = localStorage.getItem("token");

  const getCollections = () => {
    axios
      .get(GET_COLLECTIONS, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if(res.data.data.collections){
          setCollectionData(res.data.data.collections);
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GlobalNftContext.Provider
      value={{
        collectionData: collectionData,
        layerId: layerId,
        collectionId: collectionId,
        setLayerId: setLayerId,
        setCollectionId: setCollectionId,
        setLoader:setLoader,
        loader:loader
      }}
    >
      {console.log(collectionData, "collectionData context side")}
      {console.log(collectionId, "collectionId context side")}
      {console.log(layerId, "layerId context side")}



      {children}
    </GlobalNftContext.Provider>
  );
};
export function useNftProvider() {
    return useContext(GlobalNftContext)
}