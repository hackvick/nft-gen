import React from "react";
import style from "../GenerateNFTCollection/generateNftCollection.module.css";
import backgroundImage from "../../../assets/0background.png";
import { Slider } from "@mui/material";
import {API_BASE_URL} from "../../../Api/Api"

export const Rarity = (props) => {
  const { getImageData } = props;
  return (
    <>
    {/* {console.log(getImageData,"getimgdata rarity side")} */}
      {getImageData.map((layerImg,i) => (
        <>
        {/* {console.log(layerImg,"layerImg rarity side ")} */}
          <hr className={style.bottomRight}></hr>
          <div key={i} className={style.raritySettingSet}>
            <img src={`${API_BASE_URL}${layerImg.imageUrl}`} alt="background" />
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
          </div>

          <hr className={style.bottomRight}></hr>
        </>
      ))}
    </>
  );
};
