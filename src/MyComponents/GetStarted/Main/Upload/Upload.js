import React from "react";
import "../style.css";
import ArtImg from "../../../../assets/Art1.png"

export const Upload = () => {
  return (
    <div className="col-8">
      <div className="nft_center text-center px-4">
        <div className="row gx-4 gy-4">
          <div className="col-4">
            <div className="box">
              <img src={ArtImg} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <img src={ArtImg} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <img src={ArtImg} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="box upload d-flex justify-content-center align-items-center">
              <input type="file" id="upload" hidden />
              <label for="upload">
                <img src={ArtImg} alt="" />
                <br />
                Upload Layer Image
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
