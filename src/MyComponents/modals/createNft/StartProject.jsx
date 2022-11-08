import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "./StartProject.module.css";
import axios from "axios";
import AddLayer from "../AddLayer/AddLayer";
import { useNftProvider } from "../../context/NftProvider";
import { toast } from "react-toastify";
import {CREATE_COLLECTION} from "../../../Api/Api"
// import Button from 'react-bootstrap/Button';
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from 'react-router-dom';

const StartProject = ({ show, setShow, getLayer, setLayerData, layerData }) => {
  const { setCollectionId, setLoader, setLayerId } = useNftProvider();

  const [collectionCreated, setCollectionCreated] = useState(false);
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const handleClose = () => setShow(false);
  const handleStartProject = () => setCollectionCreated(false);
  const data = { name, height, width };

  const handleSize = (e) => {
    setHeight(e.target.value);
    setWidth(e.target.value);
  };

  const createProject = () => {
    const token = localStorage.getItem("token");
    setLoader(true);
    axios
      .post(CREATE_COLLECTION, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(
          res.data.data.collection._id,
          "collection id Create Collection side  response"
        );
        setCollectionId(res.data.data.collection._id);
        //this means that collection is created and now open add layer modal
        setCollectionCreated(true);
        //stop  get layer images api after new project for this set layerId blank
        setLayerId("");
        //stop  get layers api after new project for this setLayerData blank
        setLayerData([]);
      })
      .catch((err) => {
        console.log(err, "Create Collection fn side");
        toast.error(
          err.response.data
            ? err.response.data.message
            : "Something went wrong! check console"
        );
        // toast.error(err?.response?.data?.message ?? "Something went wrong!");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div>
      {console.log(name, height, width, "name,height width start project")}
      {!collectionCreated ? (
        <Modal className="CreateNft" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Start Project</Modal.Title>
          </Modal.Header>
          <Modal.Body className={style.startProjectBody}>
            <div>
              <input
                autoComplete="off"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add Project Name"
                className="form-control"
              />
            </div>
            <div>
              <select
                name="size"
                onChange={(e) => handleSize(e)}
                value={height}
                className={style.selectInput}
                id=""
              >
                <option label="Select Size" />
                <option value="512"> 512px * 512px </option>
                <option value="1024"> 1024px * 1024px </option>
              </select>
            </div>
            <Modal.Footer className={style.startProjectFooter}>
              <Button
                variant="light"
                onClick={handleClose}
                className={style.Btn}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={createProject}
                className={style.Btn}
              >
                Create
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      ) : (
        <>
          <AddLayer
            handleStartProject={handleStartProject}
            setShow={setShow}
            show={show}
            getLayer={getLayer}
          />
        </>
      )}
    </div>
  );
};

export default StartProject;
