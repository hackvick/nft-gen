import React, { createContext, useState, useEffect,useContext } from "react";
import axios from "axios";
import { GET_COLLECTIONS } from "../../Api/Api";

export const GlobalNftContext = createContext();

export const NftProvider = ({ children }) => {
  const [layerId, setLayerId] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const [collectionData, setCollectionData] = useState()

  useEffect(() => {
    getCollections();
  },[setCollectionData]);

  const token = localStorage.getItem("token");

  const getCollections = () => {
    axios
      .get(GET_COLLECTIONS, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCollectionData(res.data.data.collections);
       
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
      }}
    >
      {console.log(collectionData, "collectionData context side")}

      {children}
    </GlobalNftContext.Provider>
  );
};
export function useNftProvider() {
    return useContext(GlobalNftContext)
}