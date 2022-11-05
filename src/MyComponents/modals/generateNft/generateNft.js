import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./generateNft.module.css";
import { useNftProvider } from "../../context/NftProvider";

import axios from "axios";
import { toast } from "react-toastify";

export const NftGenerator = (props) => {
  const { setToggle, toggle } = props;
  const { collectionId } = useNftProvider();

  const [generate, setGenerate] = useState(false);
  const [generatedNftUrl, setGeneratedNftUrl] = useState();
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

  const generateNFT = () => {
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:8000/api/user/generateNFT", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res, "response nft generated modal side");
        setGeneratedNftUrl(res);
      })
      .catch((err) => {
        console.log(err, "err generate nft modal side ");
        toast.error(err.response.data ? err.response.data.message : err, "check console");
      });
  };

  return (
    <>
      <div>
        {console.log(collectionId, "collection id generate nft modal side")}

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
