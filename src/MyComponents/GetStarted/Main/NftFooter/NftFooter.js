import React from "react";
import "../style.css";
import MaskImg from "../../../../assets/Mask.png"
import crossImg from "../../../../assets/cross.png"
import plus1Img from "../../../../assets/asse/plus1.png"

export const NftFooter = () => {
  return (
    <>
      <div className="col-12 nft_bottom">
        <div className="row">
          <div className="col-8">
            <div className="layers">
              <ul className="list-unstyled text-center d-flex m-0">
                <li>
                  <img src={MaskImg} alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src={crossImg} alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
                <li>
                  <img src={MaskImg}  alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src={crossImg} alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
                <li>
                  <img src={MaskImg}  alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src={crossImg} alt="" />
                    </a>
                  </span>
                  <p>Preview</p>
                </li>
                <li>
                  <img src={MaskImg}  alt="" />
                  <span className="position-absolute translate-middle badge cross">
                    <a href="">
                      <img src={crossImg} alt="" />
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
                  <img src={plus1Img} alt="" />
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
