import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import IMAGES from "../../assets/Logo.png";
import Login from "../Login/login";
import OnBoard from "../OnBoarding/OnBoard";
import ForgetHandle from "../OnBoarding/ForgetHandle";
import { useOnboard } from "../../context/GlobalContext";
const Navbar = () => {
  
  // const [show, setShow] = useState(false);
  // const token = localStorage.getItem("token");
  const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //  setToken(localStorage.getItem('token')) 
  // })
  console.log(token,"????????????????");

  console.log(token, "local token");

  useEffect(() => {
  
  }, []);

  const {
    show,
    setShow,
    setSign,
    open,
    setOpen,
    showSign,
    setShowSign,
    showLogin,
    setShowLogin,
    login,setLogin
  } = useOnboard();

  // const token = localStorage.getItem("token");
  // console.log(token,"toooooke");

  const handleShow = (e) => {
    e.preventDefault();
    // setShowLogin(true)
    setShowSign(false);
    setSign(false);
    setShow(true);
    setOpen(false);
    setLogin(true)
  };
  const logOut = (e) =>{
    localStorage.removeItem("token");
    setToken('')
    setShow(false)
  }
  const loginSet = (e) =>{
    setShow(false)
  }
  const SignUp = (e) => {
    e.preventDefault();
    console.log(open);
    setSign(true);
    setShowSign(true);
    // setShowLogin(false)
    setShow(true);
    setOpen(true);
    setLogin(false)
  };
  const handleClose = () => setShow(false);
  return (
    <div className={style.navbar}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className={`navbar-brand ${style.logo}`} href="!#">
            <img
              alt="logo"
              className={style.logoImage}
              src={IMAGES}
              width="39px"
              height="38px"
            />
            <p className={style.logoText}>NFT Generator</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav  me-auto mb-2 mb-lg-0 ${style.unorderedList}`}
            >
              <li className="nav-item">
                <a
                  className={`nav-link active ${style.link}`}
                  aria-current="page"
                  href="!#"
                  onClick={loginSet}
                >
                  Home
                </a>
              </li>
              <li className={`nav-item ${style.link}`}>
                <a className="nav-link" href="!#">
                  Community
                </a>
              </li>
              <li className={`nav-item ${style.contact}`}>
                <a className="nav-link" href="!#">
                  Contact us
                </a>
              </li>
            </ul>
            {!token ? (
              <form
                className={`d-flex  ${style.form}`}
                // style={{ display: visibility }}
                role="search"
              >
                <div className={`loginButton `}>
                  <button
                    className={`btn  mx-4 ${style.login}`}
                    type="button"
                    onClick={handleShow}
                  >
                    login
                  </button>
                </div>

                <button
                  onClick={SignUp}
                  className={`btn  mx-4 ${style.signup}`}
                  type="button"
                >
                  Sign Up
                </button>
              </form>
            ) : (
              <form
                className={`d-flex  ${style.form}`}
                // style={{ display: visibility }}
                role="search"
              >
              <button
                  onClick={logOut}
                  className={`btn  mx-4 ${style.login}`}
                  type="button"
                >
                  LogOut
                </button>
                              </form>

            )}
          </div>
        </div>
      </nav>
      <OnBoard
        show={show}
        showSign={showSign}
        onClose={handleClose}
        open={open}
        setOpen={setOpen}
      />
      {/* <ForgetHandle open={open}/> */}
      {/* <Login show={show} onClose={handleClose} open={open} setOpen={setOpen}/> */}
    </div>
  );
};

export default Navbar;
