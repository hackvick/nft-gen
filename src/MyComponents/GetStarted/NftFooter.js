import React from "react";
import "./style.css";

export const NftFooter = () => {
  return (
    <>
      <div className="col-12 nft_bottom">
        <div className="row">
          <div className="col-8">
            <div className="layers">
              <ul className="list-unstyled text-center d-flex m-0">
                <li>
                  <img src="./image/Mask.png" alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src="./image/cross.png" alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
                <li>
                  <img src="./image/Mask.png" alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src="./image/cross.png" alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
                <li>
                  <img src="./image/Mask.png" alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src="./image/cross.png" alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
                <li>
                  <img src="./image/Mask.png" alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src="./image/cross.png" alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="add_layer d-flex align-items-center justify-content-end pe-5 h-100 w-100 text-center">
              <div>
                <div className="layer_img">
                  <img src="./image/plus1.png" alt="" />
                </div>
                <p>Add Layer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
