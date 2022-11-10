import React from 'react'
import style from "../GetStarted.module.css";
import template from "../../../assets/asse/template.png";
import album from "../../../assets/asse/album.png";


export const CustomNFT = () => {
  return (
    <>
        <div className={`${style.sideBar} col-12 col-xxl-1`}>
          <div className={` ${style.sideButtom} d-flex d-xxl-block`} >
              <div className={style.ActiveButton}>
                <img src={template} alt="template" />
                <p>Custom NFT</p>
              </div>
              <div className={` mt-0 mt-xxl-3 ${style.customButton}`}>
                <img src={album} alt="album" />
                <p>Image</p>
              </div>
            </div>
        </div>
    </>
  )
}
