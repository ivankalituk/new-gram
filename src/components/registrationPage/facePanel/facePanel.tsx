import { FC } from "react";
import logo from '../../../assets/images/mainLogo.svg'
import './facePanel.scss'

const FacePanel: FC = () => {
    return(
        <div className="facePanel">
            <div className="facePanel_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="facePanel_heading">NewGram</div>
            <div className="facePanel_explain">Choose your variant</div>

            <div className="facePanel_type">
                <button>Log In</button>
                <button>Registration</button>
            </div>
        </div>
    )
}

export default FacePanel