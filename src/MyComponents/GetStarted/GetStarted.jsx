import React, { useState, useEffect } from "react";
import style from "./GetStarted.module.css";
import Mask from "../../assets/Mask.png";
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import StartProject from "../modals/createNft/StartProject";
// import NftGenerator from '../modals/generateNft'
import {GenerateNFT} from "./GenerateNFTCollection/GenerateNFTCollection";
// import plus from "../../assets/asse/plus.png";
// import album from "../../assets/asse/album.png";
// import search from "../../assets/asse/search.png";
// import template from "../../assets/asse/template.png";
import AddLayer from "../modals/AddLayer/AddLayer";
// import NftGenerator from '../modals/generateNft';
// import NftGenerate from '../layoutsNft/NftGenerate';
// import NftGenerate from "../layoutsNft/NftGenerate";
import { CustomNFT } from "./CustomNFT/CustomNFT";
import { CreateOwnNft } from "./CreateOwnNFT/CreateOwnNft";

import axios from "axios";
import useLoader from "../hooks/useLoader";
import { Spinner } from "react-bootstrap";

// PROVIDER FOR PROVIDING LAYER DATA
import { useNftProvider } from "../context/NftProvider";
import { FooterNFTPreview } from "./FooterNFTPreview/FooterNFTPreview";

const GetStarted = () => {
  // const { loader, showLoader, hideLoader } = useLoader();

  const token = localStorage.getItem("token");
  // const [show, setShow] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [startProject, setStartProject] = useState(false);
  // const [nftGenerate, setNftGenerate] = useState(false)
  // const [toggle, setToggle] = useState("1");
  // const [open, setOpen] = useState(false)
  // const navigate = useNavigate();

  const [collectionData, setCollectionData] = useState();

  const { collectionId, setCollectionId, setLayerId, loader, setLoader } =
    useNftProvider();

  // console.log(collectionData, "COLLECTION DATA USE EFFECT");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/getCollections`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCollectionData(res.data.data.collections);
        // console.log(res.data.data.collections, "Collection Data");
        // console.log(res.data.data.layers[0], "nft gen side api get");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [collectionId]);

  const [layerData, setLayerData] = useState([]);

  const getLayer = (collectionId) => {
    // const collectionId = localStorage.getItem("collectionId");
    // console.log(collectionId, '>>>>>>>>>>>>>>>>>>>>ID GET LAYER')
    // setLoader(true)
    axios
      .get(
        `http://localhost:8000/api/user/getLayers/${collectionId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setLayerData(res.data.data.layers, "Get layer data nft gen side");
        // console.log(res.data.data.layers[0],"LayerData")
        // console.log(res.data.data.layers[0], "nft gen side api get");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleCollectionHandler = (collectionId) => {
    setCollectionId(collectionId);
    getLayer(collectionId);
    setLayerId("");
  };

  return (
    <div
      className={`container-fluid m-0 ${style.getStarted} position-relative`}
    >
      {/* <div> */}
      <AddLayer show={uploadImage} setShow={setUploadImage} />
      <StartProject
        show={startProject}
        setShow={setStartProject}
        getLayer={getLayer}
        setLayerData={setLayerData}
        layerData={layerData}
      />

      <Navbar />
      <div className={`row m-0 g-0 ${style.customCols} `}>
        {/* custom nft side  component start here */}
        <CustomNFT />
        {/* <div className={`${style.sideBar}`}>
          <div className={style.sideButtom}>
              <div className={style.ActiveButton}>
                <img src={template} alt="template" />
                <p>Custom NFT</p>
              </div>
              <div className={style.customButton}>
                <img src={album} alt="album" />
                <p>Image</p>
              </div>
            </div>
        </div> */}
        {/* custom nft side  component ends here */}

        {/* Create Own Nft  side component start here */}
        <CreateOwnNft setStartProject = {setStartProject} collectionData = {collectionData} handleCollectionHandler = {handleCollectionHandler} collectionId= {collectionId}/>
        {/* <div className={`${style.bottomBar}`}>
            <div className={style.inputContainer}>
              <img src={search} alt="search" className="mx-3" />
              <input
                type="Search"
                className={`form-control ${style.inputField} mx-3`}
                placeholder="Search"
                style={{ width: "83%" }}
              />
            </div>
            <h6 className={style.heading}>Collections</h6>
            <div className={style.bottomRow}>
              <ul className={`${style.leftSection} `}>
                <div onClick={() => setStartProject(true)}>
                  <li>
                    <span className={style.customLayer}>
                      <img src={plus} className="" alt="design" />
                      <span className={style.addPhoto}>
                        Create your Own NFT
                      </span>
                    </span>
                  </li>
                </div>
                {collectionData?.map((content, index) => {
                  return (
                    <li
                      key={index}
                      // className={content._id === collectionId ? style.active : ''}
                      onClick={() => handleCollectionHandler(content._id)}
                    >
                      <span className={style.imageWrapper}>
                        <a href="#">
                          <img
                            src={Mask}
                            className={`${style.mainImg} ${
                              content._id === collectionId ? style.active : ""
                            }`}
                            alt="content"
                          />
                        </a>
                      </span>
                    </li>
                  );
                })}
                
                
              </ul>
            </div>
          </div> */}

        {/* Create Own Nft  side component ends here */}

        {/* nft generate setting side component start here */}
        <div className={style.rightBar}>
          <GenerateNFT
            setLayerData={setLayerData}
            
          />
          {/* nft preview footer start here */}
          <FooterNFTPreview layerData={layerData}  getLayer={getLayer} />
          {/* nft preview footer ends  here */}
        </div>
        {/* nft generate setting side component ends here */}
      </div>
      {/* </div> */}

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

export default GetStarted;
