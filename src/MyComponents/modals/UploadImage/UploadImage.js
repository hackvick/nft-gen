import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import style from "./UploadImage.module.css";
import { toast } from "react-toastify";
import { useNftProvider } from "../../context/NftProvider";
import { UPLOAD_IMAGES_WITH_LAYER_ID } from "../../../Api/Api";
const UploadImage = ({ show, setShow, getImages, setUploadData }) => {
  const { layerId, setLoader } = useNftProvider();
  // const [file, setFile] = useState(null);
  // const [upload, setUpload] = useState(false);
  // const [download, setDownload] = useState(false);
  // const [addLayer, setAddLayer] = useState(false);

  const handleClose = () => setShow(false);

  const uploadLayerImages = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    let formData = new FormData(e.target);
    setLoader(true);
    axios
      .post(`${UPLOAD_IMAGES_WITH_LAYER_ID}${layerId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUploadData(res);
        handleClose();
        getImages();
        toast.success("Image Uploaded Successfully");
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(
          err?.response?.data?.message ??
            "Something went wrong! Please select collection and then layer"
        );
        setLoader(false);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className={style.uploadHeader}>
            <h5>Upload Image</h5>
          </Modal.Header>
          <form
            encType="multipart/form-data"
            onSubmit={(e) => {
              uploadLayerImages(e);
            }}
          >
            <Modal.Body className={style.uploadBody}>
              <input type="file" name="name" />
            </Modal.Body>
            <Modal.Footer className={style.uploadFooter}>
              <Button
                variant="light"
                onClick={handleClose}
                className={style.Btn}
              >
                Close
              </Button>
              <Button variant="primary" type="submit" className={style.Btn}>
                Upload
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default UploadImage;
