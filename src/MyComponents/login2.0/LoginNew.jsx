import React, { useState } from "react";
import style from "../Login/Login.module.css";
import SignupForm from "../SignupForm/SignupForm";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-bootstrap";
import ForgetPassword from "../Form/ForgetPassword/ForgetPassword";
import SignupNew from "../Signup2.0/SignupNew";
import axios from "axios";
import { LOGIN_API } from "../../Api/Api";
import { ToastContainer, toast } from "react-toastify";

import { useFormik } from "formik";
import { useOnboard } from "../../context/GlobalContext";
import {useNavigate} from 'react-router-dom'

export const LoginNew = (props) => {
  const navigate = useNavigate()

  const {forget,setForget,sign,setSign} = useOnboard()
  
  console.log(forget, '>>>>>>>>>>>>>>>>>>>>>>>>')

  const { show, onClose, open, setOpen } = props;
  // const [forget, setForget] = useState(false);
  const [verify, setVerify] = useState(false);
  // const [sign,setSign]=useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      axios
        .post(LOGIN_API, values)
        .then((res) => {
          console.log(res);
          toast.success("Login Successfully");
          console.log("login successfully");
          navigate("/getStarted")
          localStorage.setItem("token", res.data.data.accessToken);
          // navigate("/");
          // onClose();
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message === "USER_NOT_FOUND") {
            toast.error("User not found");
          } else {
            toast.error("Invalid Passowrd");
          }
        });
    },
  });
  const forgetPassword = () => {
    setForget(true)
    console.log(forget,"jhba");
  };
  const toggleContent = () => {
    setSign(true)
  };

  return (
    <>
    {
    sign ?  <SignupNew />
    :
      <>
      <div className={`col-md-6  p-0  ${style.toggleRightContent}`}>
        <div className={style.content}>
          <div className={style.logoContainer}>
            <img
              alt="logo"
              src={Logo}
              className={style.logo}
              width="30px"
              height="30px"
            />{" "}
            <p className={style.logoText}>NFT Generator</p>
          </div>

          <div className={style.leftHeading}>
            <h3>Welcome back to login Please login your account</h3>
          </div>
          <div className={style.FormContainer}>
            <form onSubmit={formik.handleSubmit} className={style.loginForm}>
              <label className={style.label}>Email Address</label>
              <div>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={style.error}>{formik.errors.email}</div>
                ) : null}
              </div>
              <label className={style.label}>Password</label>
              <div>
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={style.error}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={`row p-0  ${style.formTextRow}`}>
                <div className={`col-md-4  col-sm-6 ${style.formColumn}`}>
                  <div className="d-flex align-items-center">
                    <input
                      defaultChecked={true}
                      className={`me-2 {${style.checkbox}}`}
                      type="checkbox"
                    />
                    <label className={style.formText}>Remember me</label>
                  </div>
                </div>
                <div className={`col-md-6  col-sm-6 ${style.formColumn}`}>
                  <NavLink onClick={forgetPassword} className={style.formText}>
                    {" "}
                    Forget your password?
                  </NavLink>
                </div>
              </div>
              <button type="submit" className={style.login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="rightContent" className={`col-md-6 ${style.rightContent}`}>
        <div className={style.rightHeaderContent}>
          <h3 className={style.rightContentHeading}>Glad to see you</h3>
          <h4 className={style.rightContentText}>
            Don't have an account ? Create your account,it takes less than a
            minute
          </h4>
          <button onClick={toggleContent} className={style.signup}>
            Signup
          </button>
        </div>
      </div>
      </> 
    
    }

    </>
  );
};
