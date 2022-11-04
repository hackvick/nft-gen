import React from "react";
import "../style.css";

export const CustomNft = () => {
  return (
    <>
      <div className="col-4">
        <div className="custom_nft text-center">
          <div className="custom ">
            <img src="./image/template1.png" alt="" />
            <p>Custom NFT</p>
          </div>
          <div className="upload mt-2">
            <input type="file" id="upload" hidden />
            <label htmlFor="upload">
              <img src="./image/album1.png" alt="" />
              <br /> Image
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
