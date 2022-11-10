import { useState } from "react";
import style from "../Login/Login.module.css";

import { ToastContainer, toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import SignupNew from "./SignupNew";
import { LoginNew } from "./LoginNew";
import ForgetHandle from "./ForgetHandle";
import { useOnboard } from "../../context/GlobalContext";
// import { useOnboard } from "../../context/GlobalContext";
const OnBoard = (props) => {
    
  const { show, onClose, open, setOpen, showSign } = props;
//   const [forgotprop,setForgotProp] = useState(false)
  const {forget,setForget} = useOnboard()
  console.log(forget, '>>>>>>>>>>>>>>>>>>>>>>>>')


  return (
    <>
      <div className={`container ${style.loginContainer}`}>
        <ToastContainer />
        <Modal className="loginModal" show={show} onHide={onClose}>
          <Modal.Body className={style.modalBody}>
            <div className="row m-0 p-0">
                
              {showSign ? <SignupNew /> 
              :
              forget ?
              <ForgetHandle/>:
              <LoginNew  />}
 
              {/* {!open ? (
                <div className={`col-md-6 p-2`}>
                  <ForgetHandle />
                </div>
              ) : ( */}

              {/* <LoginNew /> */}
              {/* )} */}
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
};

export default OnBoard;
