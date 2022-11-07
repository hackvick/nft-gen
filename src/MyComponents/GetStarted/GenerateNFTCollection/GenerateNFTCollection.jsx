import React, { useState, useEffect } from "react";
import style from "./generateNftCollection.module.css";
import UploadImage from "../../modals/UploadImage/UploadImage";
import backgroundImage from "../../../assets/0background.png";
import { Slider } from "@mui/material";
import plus from "../../../assets/asse/plus.png";
import setting from "../../../assets/asse/settings.png";
import { NftGenerator } from "../../modals/generateNft/generateNft";
import EditData from "../../modals/EditData";
// import cross from "../../../assets/cross.png";
import axios from "axios";
// import { toast } from "react-toastify";
import { Rarity } from "../Rarity.js/Rarity";
import { useNftProvider } from "../../context/NftProvider";

export const GenerateNFT = (props) => {
  const { setLayerData, layerData , selectedLayerName} = props
  const { layerId, setLoader } = useNftProvider();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [uploadData, setUploadData] = useState([]);
  const [getImageData, setGetImageData] = useState([]);

  useEffect(() => {
    // Fetching other layer images when LayerId changes
    if (layerId) {
      getImages();
    } else {
      setGetImageData([]);
    }
    //eslint-disable-next-line
  }, [layerId]);

  const handleShow = () => setToggle(true);

  const getImages = () => {
    const token = localStorage.getItem("token");
    setLoader(true);
    axios
      .get(`http://localhost:8000/api/user/getImages/${layerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setGetImageData(res.data.data.Images);
        console.log(res.data.data.Images, "Image get data");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className={style.nftGenerate}>
      {/* {console.log(layerData, "layerData genrate nft collection side ")} */}
       {/* {console.log(selectedLayerName,"selectedLayerNAme generatenft side")} */}
      <UploadImage
        setUploadData={setUploadData}
        getImages={getImages}
        setShow={setShow}
        show={show}
      />
      <NftGenerator toggle={toggle} setToggle={setToggle} />
      <EditData show={edit} setShow={setEdit} />

      <div className="container p-0 h-100">
        <div className="row p-0">
          <div className={style.bottom}>
            <div className={style.displaySetting}>
              <ul className={style.categoryList}>
                {getImageData.map((layerImg, i) => (
                  <>
                    {/* {console.log(layerImg.imageUrl, "layerimagedata")} */}
                    <li key={i}>
                      <div className={style.hidenft}>
                        <span className={style.layerImages}>
                          <img
                            src={`http://localhost:8000${layerImg.imageUrl}`}
                            alt="plus"
                          />
                        </span>
                      </div>
                    </li>
                  </>
                ))}
                <li>
                  <div
                    className={style.hidenft}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <label className={style.nftCursor}>
                      <span className={style.uploadImage}>
                        <img src={plus} alt="plus" />
                        <span className={style.photoNft}>
                          Upload Layer Image
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
              <div className={style.LayerSettingBottom}>
                <div className={style.layerSetting}>
                  <div className={style.saveDraft}>
                    <img
                      className={` mt-1 ${style.arrowImage}`}
                      src={setting}
                      alt="arrow"
                      onClick={() => {
                        setEdit(true);
                      }}
                    />
                    <button
                      className={` btn btn-primary ${style.generateBtn}`}
                      type="button"
                      onClick={() => handleShow()}
                    >
                      <span className={style.topBtn}>
                        Generate NFT collection
                      </span>
                    </button>
                  </div>
                </div>
                <div className={style.layerBottomSection}>
                  {layerData.length !== 0 ? (
                    <>
                      <div className={style.setting}>
                        <h2>Layer Settings</h2>
                      </div>
                      {/* {layerData.map((data) => (
                        <></>
                      ))} */}
                      <div className={style.currentLayer}>
                        <label className={style.labelLayer}>Layer Name</label>
                        <input className="form-control" type="text" value={selectedLayerName} />
                      </div>

                      <div className={style.raritySetting}>
                        <h2>
                          Rarity Settings
                          <span title="reset">
                            <a className={style.resetBtn}>Reset</a>
                          </span>
                        </h2>
                      </div>

                      {/* rarity setting start here */}

                      {getImageData.length !== 0 ? (
                        <Rarity getImageData={getImageData} />
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  {/* rarity setting ends here */}

                  {/* <div className={style.raritySettingSet}>
                    <img src={backgroundImage} alt="background" />
                    <div style={{ width: "310px", marginRight: "30px" }}>
                      <Slider
                        size="small"
                        defaultValue={70}
                        max={200}
                        aria-label="Small"
                        className="mx-3"
                        // onChange={updateVal}
                      />
                    </div>
                    <button className="btn btn-light">25.00</button>
                  </div> */}
                  {/* <hr className={style.bottomRight}></hr>
                  <div className={style.raritySettingSet}>
                    <img src={backgroundImage} alt="background" />
                    <div style={{ width: "310px", marginRight: "30px" }}>
                      <Slider
                        size="small"
                        defaultValue={70}
                        max={200}
                        aria-label="Small"
                        className="mx-3"
                        // onChange={updateVal}
                      />
                    </div>
                    <button className="btn btn-light">25.00</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
