import { FC, useState } from "react";
import './registrationPage.scss'
import FacePanel from "../../components/registrationPage/facePanel/facePanel";
import LogInPanel from "../../components/registrationPage/logInPanel/logInPanel";
import RegistrationPanel from "../../components/registrationPage/registrationPanel/registrationPanel";

const RegistrationPage: FC = () =>{

    const [currentPanel, setCurrentPanel] = useState<string>('face')

    const handleCurrentPanelChange = (panel: string) => {
        setCurrentPanel(panel)
    }

    return(
        <div className="registrationPage">
            <div className="registrationPage_panel">
                <div className="registrationPage_panel_container">
                    {currentPanel === 'face' && <FacePanel handleCurrentPanelChange={handleCurrentPanelChange} />}
                    {currentPanel === 'login' && <LogInPanel />}
                    {currentPanel === 'registration' && <RegistrationPanel />}
                </div>                    
            </div>
        </div>
    )
}

export default RegistrationPage