import { FC } from "react";
import './chatInfo.scss'

import cross from '../../assets/images/cross.svg'
import edit from '../../assets/images/edit.svg'
import { ReactSVG } from "react-svg";
import { createRipple } from "../../utils/rippleAnimation";
import sampleAvatar from '../../assets/images/sampleChat.jpg'

const chatInfo: FC = () => {

    
    return(
        <div className="chatInfo">
            
            <div className="chatInfo_resizer"></div>

            <div className="chatInfo_container" >
                <div className="chatInfo_header">
                    <ReactSVG src={cross} className="chatInfo_header_cross" onClick={createRipple}/>
                    <div className="chatInfo_header_heading">User Info</div>
                </div>

                {/* СДЕЛАТЬ ЕГО ОТДЕЛЬНЫМ КОМПОНЕНТОМ С ПРОСМОТРОМ ФОТО */}
                <div className="chatInfo_mainInfo">
                    <img src={sampleAvatar} alt="avatar" />

                    <div className="chatInfo_mainInfo_info">
                        <div className="chatInfo_mainInfo_info_name">Чат имени слоновьего поноса</div>
                        <div className="chatInfo_mainInfo_info_additional">23 members</div>
                    </div>
                </div>

                <div className="chatInfo_actions">
                    <div className="chatInfo_actions_username"></div>
                    <div className="chatInfo_actions_bio"></div>
                    <div className="chatInfo_actions_block"></div>
                    <div className="chatInfo_actions_createContact"></div>
                </div>
            </div>
        </div>
    )
}

export default chatInfo