import React from "react";
import style from "../Login/Login.module.css";
import SignupForm from "./SignupForm/SignupForm";
import Logo from "../../assets/Logo.png";

const SignupNew = () => {
  return (
    <>
      <div className={`col-md-6  p-0`}>
        <div className={style.content}>
          <div className={style.logoContainer}>
            <img alt="logo" src={Logo} width="30px" height="30px" />{" "}
            <p className={style.logoText}>NFT Generator</p>
          </div>
          <div className={style.signupHeading}>
            <h3>Welcome back to Sign Up Please SignUp your account</h3>
          </div>
          <div className={style.FormContainer}>
            <SignupForm />
          </div>
        </div>
      </div>
      <div id="rightContent" className={`col-md-6 ${style.rightContent}`}>
        <div className={style.rightHeaderContent}>
          <h3 className={style.rightContentHeading}>Glad to see you</h3>
        </div>
      </div>
    </>
  );
};

export default SignupNew;
