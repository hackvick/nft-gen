import React from "react";
import { Collections } from "./Collections";
import { LayerSetting } from "./LayerSetting";
import { NftFooter } from "./NftFooter";
import { CustomNft } from "./CustomNft";
import { Upload } from "./Upload";
import Navbar from "./Navbar";
import "./style.css";

export const Main = () => {
  return (
    <>
      <section className="nft_generate">
        <div className="container">
          <div className="row gx-0">
            <div className="col-12 col-xxl-4 ">
              <div className="row gx-0">
                {/* <Navbar /> */}
                <CustomNft />
                <Collections />
              </div>
            </div>
            
            <div className=" col-12 col-xxl-8">
              <div className="row gx-0">
                <Upload />
                <NftFooter />
                <LayerSetting />
              </div>
           </div>

          </div>
        </div>
      </section>
    </>
  );
};
