import React, { useState, useEffect,useMemo} from "react";
import style from "./GetStarted.module.css";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import StartProject from "../modals/createNft/StartProject";
import { GenerateNFT } from "./GenerateNFTCollection/GenerateNFTCollection";
import AddLayer from "../modals/AddLayer/AddLayer";
import { CustomNFT } from "./CustomNFT/CustomNFT";
import { CreateOwnNft } from "./CreateOwnNFT/CreateOwnNft";
// PROVIDER FOR PROVIDING LAYER DATA
import { useNftProvider } from "../context/NftProvider";
import { FooterNFTPreview } from "./FooterNFTPreview/FooterNFTPreview";
import { Spinner } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import NftGenerator from '../modals/generateNft'

export const GetStarted = () => {
  const { collectionData,collectionId,setCollectionId,setLayerId,loader,setLoader,} = useNftProvider();
  const token = localStorage.getItem("token");
  const [uploadImage, setUploadImage] = useState(false);
  const [startProject, setStartProject] = useState(false);
  // const [show, setShow] = useState(false);
  // const [nftGenerate, setNftGenerate] = useState(false)
  // const [toggle, setToggle] = useState("1");
  // const [open, setOpen] = useState(false)
  // const navigate = useNavigate();
  const [layerData, setLayerData] = useState([]);
  const [projectName,setProjectName] = useState("")
  const [selectedLayerName,setSelectedLayerName] = useState("") 
  const getLayer = (collection_Id) => {
    console.log(collection_Id, "get layer function side");
    // setLoader(true)
    axios
      .get(`http://localhost:8000/api/user/getLayers/${collection_Id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setLayerData(res.data.data.layers, "Get layer data get layer fn side");
        
      })
      .catch((err) => {
        console.log(err,"err get layers fun side");
      })
      .finally(() => {
        console.log("finaly get layer fn side")
        setLoader(false);
      });
  };

  const handleCollectionHandler = (collection_Id) => {
    console.log(collection_Id,"collectionid handle collection create own nft")
    setCollectionId(collectionId);
    getLayer(collectionId);
    //get images bhi aygi ispr click krty hi
    setLayerId("");
  };

useMemo(() => {
   // eslint-disable-next-line array-callback-return
   collectionData.map((data)=>{
    // console.log(collectionData,"collectionData useMemo fn side ")
    // console.log(collectionId,"collectionid useMemo side")
     if(data._id === collectionId){
      console.log(data.name,"name of project current")
      // console.log("yes collectionId match")
      setProjectName(data.name)
     }else{
      // setProjectName("")
      console.log("collectionid not match")
     }
  })
}, [collectionData,collectionId]);

  return (
    <div
      className={`container-fluid m-0 ${style.getStarted} position-relative`}
    >
    {console.log(selectedLayerName," selected layerName get started side")}
      <div>
        <AddLayer show={uploadImage} setShow={setUploadImage} />
        <StartProject
          show={startProject}
          setShow={setStartProject}
          getLayer={getLayer}
          setLayerData={setLayerData}
          layerData={layerData}
        />

        <Navbar ProjectName = {projectName}/>

        <div className={`row m-0 g-0 ${style.customCols} `}>
          <CustomNFT />
          <CreateOwnNft
            setStartProject={setStartProject}
            collectionData={collectionData}
            handleCollectionHandler={handleCollectionHandler}
            collectionId={collectionId}
          />

          <div className={style.rightBar}>
            <GenerateNFT selectedLayerName = {selectedLayerName} setLayerData={setLayerData} layerData = {layerData}/>
            <FooterNFTPreview setSelectedLayerName = {setSelectedLayerName} layerData={layerData} getLayer={getLayer} />
          </div>
        </div>
      </div>

      {loader && (
        <div className={style["spinner-outer"]}>
          <Spinner
            animation="border"
            className={style["cust-spinner"]}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};


