import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./generateNft.module.css";
import { useNftProvider } from "../../context/NftProvider";
import JSZip from "jszip-utils";
import { saveAs } from "file-saver";
import axios from "axios";
import { toast } from "react-toastify";
import $ from "jquery";

export const NftGenerator = ({ setToggle, toggle }) => {
  const handleClose = () => {
    setToggle(false);
  };
  const handleCloseGenerate = () => {
    setGenerate(false);
  };
  // const downloadFile = () => {
  //   const link = document.createElement('a');
  //   link.href = downloadUrl;
  //   link.setAttribute('download', 'file.zip'); //set download attribute to link
  //   document.body.appendChild(link);
  //   link.click(); // this will download file.zip
  //   link.parentNode.removeChild(link);
  // }
  const [generate, setGenerate] = useState(false);
  const [downloadData, setDownloadData] = useState(false);
  const [copy, setCopy] = useState("");
  const handleCreate = () => {
    handleClose();
    setGenerate(true);
  };
  const { collectionId } = useNftProvider();

  const editions = parseInt(copy);

  console.log(collectionId, "Collection54687584");
  const token = localStorage.getItem("token");
  const data = {
    editions,
    collectionId,
  };
  const download = async () => {
    axios
      .post("http://localhost:8000/api/user/generateNFT", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("aas");
        setDownloadData(res);
        console.log(res);
        console.log(res.data.data.nfts);
        //
        // Fetch the image and parse the response stream as a blob
        // const imageBlob =  fetch(`[http://localhost:8000 ${res.data.data.nfts}]`).then(response => response.blob());

        // create a new file from the blob object
        // const imgData = new File([imageBlob], 'filenadme.jpg');

        // Copy-pasted from JSZip documentation
        // var zip = new JSZip();
        // zip.file('Hello.txt', 'Hello World\n');
        // var img = zip.folder('images');
        // img.file('smile.gif', imgData, { base64: true });
        // zip.generateAsync({ type: 'blob' }).then(function(content) {
        //   saveAs(content, 'example.zip');
        // });

        //
    //     var zip = new JSZip();
    //     zip.add("hello1.txt", "Hello First World\n");
    // zip.add("hello2.txt", "Hello Second World\n");
    // const content = zip.generate();
    //  const location.href = "data:application/zip;base64," + content;
          
            // 1) generate the zip file
             // 2) trigger the download
      })
      .catch((err) => {
        toast.error("Try again");
      });
  };

  return (
    <>
      <div>
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
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              type="number"
            />
            <Button
              variant="primary"
              id="blob"
              className={style.Btn}
              onClick={download}
            >
              Download NFt
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

// export default NftGenerator
