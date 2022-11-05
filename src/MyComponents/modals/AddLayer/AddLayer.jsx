import React, { useState } from "react";
import style from "./AddLayer.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UploadImage from "../UploadImage/UploadImage";
import { toast } from 'react-toastify'
import { useNftProvider } from "../../context/NftProvider";

const AddLayer = (props) => {
  // eslint-disable-next-line
  const { layerId, setLayerId, collectionId, loader, setLoader } = useNftProvider();

  // eslint-disable-next-line
  const { getLayer, setShow, show } = props;
  const token = localStorage.getItem("token");

  // eslint-disable-next-line
  const [layer, setLayer] = useState("");
  const [upload, setUpload] = useState(false);
  // eslint-disable-next-line

  const initialValues = {
    layer: "",
  };
  const validationSchema = Yup.object({
    layer: Yup.string().required("*Required"),
  });

  const onSubmit = async () => {
    const data = {
      name: formik.values.layer,
      collectionId,
    };
    setLoader(true)

    console.log('testing', loader)
    await axios
      .post("http://localhost:8000/api/user/addLayer", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("hittt");
        localStorage.setItem("LayerId", res.data.data.layer._id); // Not in use for R.B
        setLayerId(res.data.data.layer._id);
        setShow(false);
        props.getLayer(collectionId);
        toast.success('Layer Added Successfully')
        formik.resetForm();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message ?? "Something went wrong!", );
        setLoader(false)
      })
      .finally(() => {
        // hideLoader();
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
        <UploadImage show={upload} setShow={setUpload} />
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
            <Button
              variant="primary"
              className={style.Btn}
              type="submit"
            >
              Add Layer
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddLayer;
