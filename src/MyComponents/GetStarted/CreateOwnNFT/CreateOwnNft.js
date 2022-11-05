import React from "react";
import style from "../GetStarted.module.css";
import plus from "../../../assets/asse/plus.png";
import search from "../../../assets/asse/search.png";
import Mask from "../../../assets/Mask.png";

export const CreateOwnNft = (props) => {
    const {setStartProject,collectionData,handleCollectionHandler,collectionId} = props

  return (
    <>
     {/* {console.log(style.active,"style active create own nft side")} */}
      <div className={`${style.bottomBar}`}>
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
                  <span className={style.addPhoto}>Create your Own NFT</span>
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
                {content._id === collectionId?
                <>
                {console.log(content._id,"content id createown side")}
                {console.log(collectionId,"collectionId createOwn Side")} </>:""}
                  <span className={style.imageWrapper}>
                    <a href="#">
                      <img
                        src={Mask}
                        className={`${style.mainImg} ${content._id === collectionId ? style.active : ""}`}
                        alt="content"
                      />
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
