import { useState } from 'react'
import style from "../Login/Login.module.css";
import VerifyForm from "../Form/ForgetPassword/VerifyForm";
import ForgetPassword from '../Form/ForgetPassword/ForgetPassword';
import { SideSignupModal } from './SideSignupModal';
import { useOnboard } from '../../context/GlobalContext';

const ForgetHandle = (props) => {
    const {forget,setForget,setSign,} = useOnboard()

    const { show, onClose, open, setOpen } = props;

    const [verify, setVerify] = useState(false);
    // const [forget, setForget] = useState(false);
    
    const createAccount = () => {
        setForget(false)
        setSign(true)
    };
    const toggleContent = () => {
        setOpen(true);
    };
    return (
        <>
        {forget ? 
        <>
            <div className={`col-md-6 ${style.content}`}>
                <div className={style.logoContainer}>
                    {/* <img alt="logo" src={Logo} className={style.logo} width="30px" height="30px" /> <p className={style.logoText}>NFT Generator</p> */}
                </div>
                <div className={style.leftHeading}>
                    <h3>Forget Password</h3>
                    <p>Please enter your registered email address and we’ll send you a verification code to reset your password</p>
                </div>
                <div className={style.FormContainer}>
                    {!verify ?
                        <ForgetPassword verify={verify} setVerify={setVerify} />
                        : <VerifyForm />}
                </div>
                <div className={`row ${style.bottomRow}`}>
                    {!open &&
                        <>
                            {!verify ?
                                <>
                                    <div className={`col-md-6 col-sm-6 ${style.bottomLogin}`} onClick={() => setForget(false)} >Login</div>
                                    <div className={`col-md-6 col-sm-6 ${style.CreateAccount}`} onClick={createAccount}>Create an Account</div>
                                </>
                                :
                                <>
                                    <div className={`col-md-6 col-sm-6 ${style.bottomLogin}`} onClick={() => setForget(false)} >Login</div>
                                    <div className={`col-md-6 col-sm-6 ${style.CreateAccount}`} onClick={toggleContent}>Resend Code</div>
                                </>
                            }
                        </>
                    }
                </div>
            </div>
        <SideSignupModal setForget={setForget} />
        </>:null
            
                }
        </>
    )
}

export default ForgetHandle