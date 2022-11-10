import React from "react";
import Logo from '../../../assets/Logo.png';
import style from './Navbar.module.css'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const styleProjectName = {
    "font-size": "16px",
    "font-weight": "500",
    "line-height": "17px",
    "font-family": "Poppins",
  };


const Navbar = (props) => {
    const {ProjectName} = props

    return (
        <div  className={style.navbar}>
         {console.log(ProjectName,"project name navbar side ")}
            <div className={`row ${style.row}`}>
                <div className="col-3">
                    <ul className={style.leftSide}>
                        <Link to='/'>
                            <li><img src={Logo} alt="logo" /></li>
                        </Link>
                        <Link to='/'>
                            <li style={{ marginLeft: "81px" }} className={style.liSection}>Home</li>
                        </Link>
                        <li style={{ marginLeft: "40px" }} className={style.liSection}>My Projects </li>


                    </ul>
                </div>
                <div className="col-2" style={{ marginTop: "-6px" }}>
                {ProjectName ? <span style={styleProjectName}>{ProjectName}</span> : ""}                </div>
                <div className="col-3">
                    <div className={style.bottom}>
                        <p style={{"marginRight": "190px"}}>NFT Generator</p>
                    </div>
                </div>
                <div className="col-3" style={{  }}>
                    <div className={style.rightSide}>
                        <div className={style.profile}></div>
                        <p>admin@gmail.com</p>
                        <RiArrowDropDownFill size={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;