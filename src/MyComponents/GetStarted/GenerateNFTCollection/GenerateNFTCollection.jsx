import React, { useState, useEffect } from "react";
import style from "./generateNftCollection.module.css";
import UploadImage from "../../modals/UploadImage/UploadImage";
import backgroundImage from "../../../assets/0background.png";
import { Slider } from "@mui/material";
import plus from "../../../assets/asse/plus.png";
import setting from "../../../assets/asse/settings.png";
import { NftGenerator } from "../../modals/generateNft/generateNft";
import EditData from "../../modals/EditData";
import { Rarity } from "../Rarity.js/Rarity";
import { useNftProvider } from "../../context/NftProvider";
import { API_BASE_URL } from "../../../Api/Api";
// import { toast } from "react-toastify";
// import axios from "axios";
// import cross from "../../../assets/cross.png";

export const GenerateNFT = (props) => {
  const {
    layerData,
    selectedLayerName,
    getImageData,
    setGetImageData,
    getImages,
  } = props;
  const { layerId, setLoader } = useNftProvider();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [uploadData, setUploadData] = useState([]);
  const [localUploadImages, setLocalUploadImages] = useState();

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
  
  let imagess = []
  const onImageChange = (event) => {
    event.preventDefault();
    console.log(event.target.name, "e target name upload image side");
    console.log(event.target.name.files, "e target files upload image side");
    // let formData = new FormData(event.target);
    // console.log(formData,"formData upload onImageChange fn side");
    let files = event.target.name.files;
    console.log(files, "selectedImages onimagechange fn side");

    if (event.target.name.files && event.target.name.files[0]) {
      for (let i = 0; i < files.length; i++) {
        console.log(files[i], "files loop side ");
        imagess.push(URL.createObjectURL(files[i]))
        console.log(URL.createObjectURL(files[i]),"file url created")

        setLocalUploadImages(URL.createObjectURL(files[i]));
      }
    }
  };

  return (
    <div className={style.nftGenerate}>
      {console.log(
        localUploadImages,
        "upload local generatenft collection side"
      )}
      {console.log(imagess,"imagess after push ")}
      {/* {console.log(layerData, "layerData genrate nft collection side ")} */}
      {/* {console.log(selectedLayerName,"selectedLayerNAme generatenft side")} */}
      <UploadImage
        onImageChange={onImageChange}
        setUploadData={setUploadData}
        getImages={getImages}
        setShow={setShow}
        show={show}
      />
      <NftGenerator toggle={toggle} setToggle={setToggle} />
      <EditData show={edit} setShow={setEdit} />

      <div className="container p-0 h-100">
        <div className="row p-0 m-0">
          <div className={style.bottom}>
            <div className={style.displaySetting}>
              <div className={style.nft_center}>
                <ul className={style.categoryList}>
                  {getImageData.map((layerImg, i) => (
                  <>
                    {/* {console.log(layerImg.imageUrl, "layerimagedata")} */}
                    <li key={"i"}>
                      <div className={style.hidenft}>
                        <span className={style.layerImages}>
                          <img
                            src={`${API_BASE_URL}${layerImg.imageUrl}`}
                            // src={localUploadImages}
                            alt="plus"
                          />
                        </span>
                      </div>
                    </li>
                  </>
                  ))}
                  <li>
                    {/* upload Image div starts here that trigger upload modal */}
                    {layerData.length !== 0 ? (
                      <>
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
                      </>
                    ) : (
                      ""
                    )}
                    {/* upload Image div ends here that trigger upload modal */}
                  </li>
                </ul>
                
              </div>        
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
                  {/* show layer settings when getLayer Api Hit and Data retreive successfully */}
                  {layerData.length !== 0 ? (
                    <>
                      <div className={style.setting}>
                        <h2>Layer Settings</h2>
                      </div>

                      <div className={style.currentLayer}>
                        <label className={style.labelLayer}>Layer Name</label>
                        <input
                          className="form-control"
                          type="text"
                          value={selectedLayerName}
                        />
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
