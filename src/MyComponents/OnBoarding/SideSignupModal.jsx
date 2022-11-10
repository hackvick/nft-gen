
import { useOnboard } from '../../context/GlobalContext';
import style from "../Login/Login.module.css"
import SignupNew from './SignupNew';
export const SideSignupModal = (props) => {

    const {setForget,sign,setSign} = useOnboard()

    // const { setForget } = props;
    
    const toggleContent = () => {
        
    setForget(false)
    setSign(true)
    };
    return (
        <>
            {sign ? <SignupNew  /> :
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
            }
        </>
    )
}
