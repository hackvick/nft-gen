import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./generateNft.module.css";
import { useNftProvider } from "../../context/NftProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";
import JSZipUtils from "jszip-utils";
import { API_BASE_URL, GENERATE_NFT } from "../../../Api/Api";

export const NftGenerator = (props) => {
  const { setToggle, toggle } = props;
  const { collectionId, setLoader } = useNftProvider();

  const [generate, setGenerate] = useState(false);
  const [generatedNftUrl, setGeneratedNftUrl] = useState([]);
  const [numberOfEditions, setNumberOfEditions] = useState("");
  const editions = parseInt(numberOfEditions);
  const data = {
    editions,
    collectionId,
  };

  const handleClose = () => setToggle(false);
  const handleCloseGenerate = () => setGenerate(false);
  const handleCreate = () => {
    handleClose();
    setGenerate(true);
  };

  const handleDownload = (photos) => {
    const zip = require("jszip")();
    let count = 0;
    photos.forEach((photo, index) => {
      // console.log(photo, "photos handle download side ");

      const fileName = photo
        .replace(/[\/]/gi, "")
        .replace("Images", "")
        .replace("images", "")
        .replace("build", "");

      console.log(fileName, "filename handle download side");
      JSZipUtils.getBinaryContent(
        `${API_BASE_URL}${photo}`,
        function (err, data) {
          // console.log(data, "data zip file side");
          zip.file(fileName, data, { binary: true });
          count++;
          if (count === photos.length) {
            zip.generateAsync({ type: "blob" }).then(function (content) {
              // console.log(content, "content zip file side ");
              saveAs(content, "NFTfile.zip");
            });
          }
        }
      );
    });
  };

  const generateNFT = async () => {
    const token = localStorage.getItem("token");
    console.log(data, "data that pass in api gen nft side");
    setLoader(true);
    await axios
      .post(GENERATE_NFT, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res, "res nft generate side");

        setGeneratedNftUrl(res.data.data.nfts);
        handleDownload(res.data.data.nfts);
      })
      .catch((err) => {
        console.log(err, "err generate nft modal side ");
        if (err.message === "Network Error") {
          toast.error(" Network Error Please try Again! ");
        } else {
          toast.error(
            err.response.data ? err.response.data.message : err,
            "check console"
          );
        }
      })
      .finally(() => {
        setLoader(false);
        handleCloseGenerate();
      });
  };

  return (
    <>
      <div>
        {/* {console.log(
          generatedNftUrl,
          "generatedNft Url generate nft modal side "
        )}
        {console.log(data, "data that pass in api gen nft side")}

        {console.log(collectionId, "collection id generate nft modal side")}
        {console.log(numberOfEditions, "numberOfEditions nft modal side")} */}

        <Modal show={toggle} onHide={handleClose} className="nftGenerateModal">
          <Modal.Header closeButton className={style.generateHeader}>
            <h5>Generate NFT</h5>
          </Modal.Header>
          <Modal.Footer className={style.generateFooter}>
            <Button variant="primary" className={style.Btn}>
              Connect Wallet to Create Smart Contract
            </Button>
            <Button
              variant="light"
              className={style.Btn}
              onClick={handleCreate}
            >
              Generate NFT Only
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        {/* Download Nft Modal start here */}
        <Modal
          show={generate}
          onHide={handleCloseGenerate}
          className="nftGenerateModal"
        >
          <Modal.Header
            closeButton
            className={style.generateHeader}
          ></Modal.Header>
          <Modal.Footer className={style.generateFooter}>
            <input
              className="form-control"
              placeholder="Enter the number of you want to generate"
              value={numberOfEditions}
              onChange={(e) => setNumberOfEditions(e.target.value)}
              type="number"
            />
            <Button
              variant="primary"
              className={style.Btn}
              onClick={generateNFT}
            >
              Download NFT
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

// export default NftGenerator
