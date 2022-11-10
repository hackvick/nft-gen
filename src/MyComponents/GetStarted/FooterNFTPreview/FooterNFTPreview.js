import React, { useState, useMemo } from "react";
import style2 from "../GenerateNFTCollection/generateNftCollection.module.css";
import backgroundImage from "../../../assets/0background.png";
import plus from "../../../assets/asse/plus.png";
import cross from "../../../assets/cross.png";
import AddLayer from "../../modals/AddLayer/AddLayer";
import { useNftProvider } from "../../context/NftProvider";
import { API_BASE_URL } from "../../../Api/Api";

export const FooterNFTPreview = (props) => {
  const { layerData, getLayer, setSelectedLayerName, getImageData } = props;
  const { layerId, setLayerId } = useNftProvider();
  const [layer, setLayer] = useState(false);

  // console.log(layerData, "layerData footer nft side ");
  // console.log(getImageData, "getImageData footer nft side ");

  return (
    <>
      {/* {console.log(currentLayerImg,"currentLayerimg")} */}
      <AddLayer getLayer={getLayer} show={layer} setShow={setLayer} />
      <div className={style2.nftGenerate}>
        <div className="container p-0 h-100">
          <div className={style2.nftFooter}>
            <div className={style2.image}>
              <div className={style2.outterDiv}>
                <div className={`row ${style2.inside}`}>
                  <div className={`col-8 ${style2.nftColBottom} layer_add`}>
                    <div className={style2.layer_outer}>
                      <div className={style2.parent}>
                        <div className={style2.rectangle1}>
                          <div className={style2.bitmap3}>
                            <img src={backgroundImage} alt="" />
                          </div>
                        </div>
                        <div className={style2.preview}>
                          <p>Preview</p>
                        </div>
                      </div>

                      {/* <div className={style2.baby}>
                        <div className={style2.shape}>
                          <img src="red_close.png" alt="" />
                        </div>
                        <div className={style2.rectangle}>
                          <div className={style2.bitmap1}>
                            <img src={backgroundImage} alt="" />
                          </div>
                        </div>
                        <div
                          className={style2.preview}
                          style2={{ marginRight: "18px" }}
                        >
                          <p>Background</p>
                        </div>
                      </div> */}

                      {layerData.map((layerData) => (
                        <>
                          <div
                            className={`${style2.baby} ${
                              layerData._id === layerId ? style2.active : ""
                            }`}
                            key={layerData._id}
                            onClick={() => {
                              setLayerId(layerData._id);
                              setSelectedLayerName(layerData.name)
                            }}
                          >
                            {getImageData.map((layerimg) => (
                              <></>
                            ))}
                            {/* {console.log(
                              getImageData,
                              "get img data footer side"
                            )} */}
                            <div className={style2.rectangle}>
                              <div className={style2.shape}>
                                <img src={cross} alt="" />
                              </div>
                              <div className={style2.bitmap3}>
                                {getImageData.length !== 0 ? (
                                  <img
                                    src={`${API_BASE_URL}${getImageData[0].imageUrl}`}
                                    alt=""
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className={style2.preview}>
                              <p>{layerData.name}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className={`col-4 ${style2.add_layer}`}>
                    <div className={style2.layerBaby}>
                      <div className={style2.addLayer}>
                        <div
                          className={style2.moreDiv}
                          onClick={() => {
                            setLayer(true);
                          }}
                        >
                          <div className={style2.oval}>
                            <div className={style2.path}>
                              <img src={plus} alt="" />
                            </div>
                          </div>
                          <div className={style2.addLayerP1}>
                            <p>Add Layer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
