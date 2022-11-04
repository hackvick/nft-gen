import React from 'react'
import style from "../GetStarted.module.css";
import template from "../../../assets/asse/template.png";
import album from "../../../assets/asse/album.png";


export const CustomNFT = () => {
  return (
    <>
        <div className={`${style.sideBar}`}>
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
        </div>
    </>
  )
}
