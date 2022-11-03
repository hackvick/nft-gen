import React from "react";
import "./style.css";

export const LayerSetting = () => {
  return (
    <div className="col-4">
      <div className="nft_right">
        <div className="setting">
          <a href="">
            <img src="./image/setting1.png" alt="" />
          </a>
          <a href="#">
            <h3 className="ms-3 d-inline">Generate NFTCollection</h3>
          </a>
        </div>
        <h3 className="mt-4">Layer Setting</h3>
        <form action="#" className="nft_form">
          <div className="mt-4">
            <label htmlFor="layer_name" className="form-label">
              Layer Name
            </label>
            <input
              type="text"
              id="layer_name"
              className="form-control"
              defaultValue="Background"
            />
          </div>
          <div className="reset mt-4 d-flex justify-content-between">
            <p>Rarity Setting</p>
            <button type="reset">Reset</button>
          </div>
          <div className="range mt-2">
            <div className="d-flex align-items-center">
              <label htmlFor="customRange1" className="form-label">
                <img src="./image/img1.png" alt="" className="img-fluid" />
              </label>
              <input type="range" className="form-range" id="customRange1" />
              <input
                type="text"
                id="ex"
                className="form-control"
                defaultValue="25.00"
                disabled
              />
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="customRange1" className="form-label">
                <img src="./image/img1.png" alt="" className="img-fluid" />
              </label>
              <input type="range" className="form-range" id="customRange1" />
              <input
                type="text"
                id="ex"
                className="form-control"
                defaultValue="25.00"
                disabled
              />
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="customRange1" className="form-label">
                <img src="./image/img1.png" alt="" className="img-fluid" />
              </label>
              <input type="range" className="form-range" id="customRange1" />
              <input
                type="text"
                id="ex"
                className="form-control"
                defaultValue="25.00"
                disabled
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
