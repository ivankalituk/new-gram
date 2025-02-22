import { FC } from "react";
import './chatInfo.scss'

import cross from '../../assets/images/cross.svg'
import { createRipple } from "../../utils/rippleAnimation";
import sampleAvatar from '../../assets/images/sampleChat.jpg'
import { useBlockResize } from "../../hooks/useBlockResize";

const chatInfo: FC = () => {

    const {handleMouseDown: handleChatsResize, blockSize: chatsSize} = useBlockResize(256, 636, 439, true)
    
    return(
        <div className="chatInfo">
            
            <div className="chatInfo_resizer" onMouseDown={handleChatsResize}></div>

            <div className="chatInfo_container" style={{ width: `${chatsSize}px` }}>
                <div className="chatInfo_header">
                    <div className="chatInfo_header_heading">User Info</div>
                </div>

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