import React from "react";
import "../style.css";
import MaskImg from "../../../../assets/Mask.png"
import search1Img from "../../../../assets/asse/search1.png"
import plus1Img from "../../../../assets/asse/plus1.png"
export const Collections = () => {
  return (
    <>
      <div className="col-8">
        <div className="collection pt-5">
          <div className="search mx-3">
            <form action="#">
              <img src={search1Img} alt="" />
              <input type="text" className="searchTerm" placeholder="Search" />
            </form>
          </div>
          <div className="nft_collections">
            <h3 className="pt-4 pb-2">Collections</h3>
            <div className="nft_img">
              <div className="row gy-2">
                <div className=" col-4 col-xxl-6">
                  <div className="upload d-flex align-items-center">
                    <input type="file" id="upload" hidden />
                    <label htmlFor="upload">
                      <img src={plus1Img} alt="" />
                      <br />
                      Create Your Own NFT
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label className="form-label btn" htmlFor="btn-check">
                      <span>
                        <img
                          src={MaskImg}
                          alt=""
                          className="img-fluid img"
                        />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check1"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check1">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check2"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check2">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check3"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check3">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check4"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check4">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check5"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check5">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check6"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check6">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check7"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check7">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check8"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check8">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check9"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check9">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4 col-xxl-6">
                  <div className="box">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check10"
                      autoComplete="off"
                    />
                    <label className="form-label btn" htmlFor="btn-check10">
                      <img
                        src={MaskImg}
                        alt=""
                        className="img-fluid"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
