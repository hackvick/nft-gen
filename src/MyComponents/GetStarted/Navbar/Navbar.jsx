import React from "react";
import Logo from '../../../assets/Logo.png';
import style from './Navbar.module.css'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const {ProjectName} = props

    return (
        <div style={{  }} className={style.navbar}>
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
                {/* <div className="col-2" style={{ marginTop: "6px" }}>
                    <span > {ProjectName? <u style={{"textUnderlineOffset": "5px"}}> {ProjectName}</u>:"___________"}  </span>
                </div> */}
                <div className="col-3">
                    <div className={style.bottom}>
                        <p>NFT Generator</p>
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