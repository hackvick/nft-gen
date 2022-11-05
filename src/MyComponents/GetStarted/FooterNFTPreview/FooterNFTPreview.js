import React, { useState } from "react";
import style2 from "../GenerateNFTCollection/generateNftCollection.module.css";
import backgroundImage from "../../../assets/0background.png";
import plus from "../../../assets/asse/plus.png";
import cross from "../../../assets/cross.png";
import AddLayer from "../../modals/AddLayer/AddLayer";
import { useNftProvider } from "../../context/NftProvider";

export const FooterNFTPreview = (props) => {
  const { layerData, getLayer } = props;
  const { layerId, setLayerId } = useNftProvider();

  const [layer, setLayer] = useState(false);

  // let layerData = [];
  // let layerId;
  // let setLayerId = () => {};
  // let setLayer = () => {};

  return (
    <>
      <AddLayer getLayer={getLayer} show={layer} setShow={setLayer} />
      <div className={style2.nftGenerate}>
        <div className="container p-0 h-100">
          <div className={style2.nftFooter}>
            <div className={style2.image}>
              <div className={style2.outterDiv}>
                <div className={style2.inside}>

                  <div className={`col-8 ${style2.nftColBottom } layer_add`}>
                    
                    <div> 
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

                    <div className={style2.baby}>
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
                    </div>
              </div>

                    {layerData.map((layerData) => (
                      <div
                        className={`${style2.baby} ${
                          layerData._id === layerId ? style2.active : ""
                        }`}
                        key={layerData._id}
                        onClick={() => {
                          setLayerId(layerData._id);
                        }}
                      >
                        <div className={style2.rectangle}>
                          <div className={style2.shape}>
                            <img src={cross} alt="" />
                          </div>
                          <div className={style2.bitmap3}>
                            <img src={backgroundImage} alt="" />
                          </div>
                        </div>
                        <div className={style2.preview}>
                          <p>{layerData.name}</p>
                        </div>
                      </div>
                    ))}

                  </div>
                  <div className="col-4 add_layer">
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
