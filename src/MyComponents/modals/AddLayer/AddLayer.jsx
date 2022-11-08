import React, { useState } from "react";
import style from "./AddLayer.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UploadImage from "../UploadImage/UploadImage";
import { toast } from "react-toastify";
import { useNftProvider } from "../../context/NftProvider";
import {ADD_LAYER} from "../../../Api/Api"

const AddLayer = (props) => {
  const { setLayerId, collectionId, loader, setLoader } = useNftProvider();
  const { getLayer, setShow, show ,handleStartProject} = props;

  const [layer, setLayer] = useState("");
  // const [upload, setUpload] = useState(false);

  const initialValues = {
    layer: "",
  };
  const validationSchema = Yup.object({
    layer: Yup.string().required("*Required"),
  });

  const onSubmit = async () => {
    const token = localStorage.getItem("token");
    const data = {
      name: formik.values.layer,
      collectionId,
    };
    setLoader(true);

    console.log(loader, "loader value add layer onsubmit side");
    await axios
      .post(ADD_LAYER, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(
          res.data.data.layer._id,
          "layerID add layer fn or api  side "
        );
        setLayerId(res.data.data.layer._id);
        setShow(false);
        getLayer(collectionId,res.data.data.layer.name);
        //handleStartProject is Used To reopen Start Project Modal or create Collections
        handleStartProject()
        toast.success("Layer Added Successfully");
        formik.resetForm();
      })
      .catch((err) => {
        console.log(err, "err add layer side ");
        toast.error(
          err.response.data
            ? err.response.data.message
            : "Something went wrong!"
        );
        // toast.error(err?.response?.data?.message ?? "Something went wrong!");
        setLoader(false);
      })
      .finally(() => {
        // setLoader(false)
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        {/* <UploadImage show={upload} setShow={setUpload} /> */}
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton className={style.addHeader}>
            <h5>Add Layer</h5>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Add Layer"
                name="layer"
                value={layer}
                {...formik.getFieldProps("layer")}
              />
              {formik.touched.layer && formik.errors.layer ? (
                <p className="text-danger error pl-2">{formik.errors.layer}</p>
              ) : null}
            </div>
          </Modal.Body>
          <Modal.Footer className={style.addFooter}>
            <Button variant="light" onClick={handleClose} className={style.Btn}>
              Cancel
            </Button>
            <Button variant="primary" className={style.Btn} type="submit">
              Add Layer
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddLayer;
