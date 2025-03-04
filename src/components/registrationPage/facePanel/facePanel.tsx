import { FC } from "react";
import logo from '../../../assets/images/mainLogo.svg'
import './facePanel.scss'

interface FacePanelInterface {
    handleCurrentPanelChange: (panel: string) => void
}

const FacePanel: FC <FacePanelInterface> =({handleCurrentPanelChange}) => {

    const handleLogIn = () =>{
        handleCurrentPanelChange('login')
    }

    const handleRegistration = () =>{
        handleCurrentPanelChange('registration')
    }

    return(
        <div className="facePanel">
            <div className="facePanel_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="facePanel_heading">NewGram</div>
            <div className="facePanel_explain">Choose your variant</div>

            <div className="facePanel_type">
                <button onClick={handleLogIn}>Log In</button>
                <button onClick={handleRegistration}>Registration</button>
            </div>
        </div>
    )
}

export default FacePanel