import { FC } from "react";
import './registrationPage.scss'
import FacePanel from "../../components/registrationPage/facePanel/facePanel";

const RegistrationPage: FC = () =>{
    return(
        <div className="registrationPage">
            <div className="registrationPage_panel">
                <div className="registrationPage_panel_container">
                    <FacePanel />
                </div>                    
            </div>
        </div>
    )
}

export default RegistrationPage