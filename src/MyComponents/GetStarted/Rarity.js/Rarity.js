import React, { useState } from "react";
import style from "../GenerateNFTCollection/generateNftCollection.module.css";
import backgroundImage from "../../../assets/0background.png";
import { Slider } from "@mui/material";
import { API_BASE_URL } from "../../../Api/Api";
import { useMemo } from "react";

export const Rarity = (props) => {
  const { getImageData, sliderOnChange } = props;
  const [startValueSlider, setStartValueSlider] = useState({ value: 1 });

  useMemo(() => {
    getImageData.map((data, index) => {
      console.log(index, "index divide rarity");
      setStartValueSlider((prev) => ({
        ...prev,
        value: index + 1,
      }));
    });
  },[getImageData,setStartValueSlider]);

  console.log(startValueSlider, "start Value Slider");
  const divideValue = 100 /startValueSlider.value
  console.log(divideValue,"divide value first ")
  const [val, setVal] = useState(25);


  // const [defaultVal,setDefaultVal] = useState(100/getImageData.length)
 console.log(val,"val start value state side sliderrr")

 console.log(100 /startValueSlider.value,"divide value sliderrr")

  const updateVal = (e) => {
    console.log(e.target.value, "e target val");
    const leftValue = 100 - e.target.value;
    console.log(leftValue, "left value");
    // setVal(leftValue)
  };

  return (
    <>
      <div className={style.rarity_options}>
        {console.log(val,"val rarity side")}
        {getImageData.map((layerImg, i) => (
          <>
            {/* {console.log(getImageData.length,"index value getimagedata")} */}

            {/* {console.log(layerImg,"layerImg rarity side ")} */}

            <hr className={style.bottomRight}></hr>
            <div key={i} className={style.raritySettingSet}>
              <img
                src={`${API_BASE_URL}${layerImg.imageUrl}`}
                alt="background"
              />
              <div style={{ width: "310px", marginRight: "30px" }}>
                <Slider
                  size="small"
                  defaultValue={divideValue}
                  max={100}
                  aria-label="Small"
                  className="mx-3"
                  onChange={(e) => {
                    updateVal(e);
                  }}
                  value={divideValue}
                  // onValueChange = {val}
                  // onChange={updateVal}
                />
              </div>
              <button
                style={{ "content-visibility": "auto" }}
                className="btn btn-light"
              >
                {divideValue}
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
