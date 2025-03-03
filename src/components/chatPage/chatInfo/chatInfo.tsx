import { FC, useState } from "react";
import './chatInfo.scss'

import cross from '../../../assets/images/cross.svg'
import sampleAvatar from '../../../assets/images/sampleChat.jpg'
import { useBlockResize } from "../../../hooks/useBlockResize";
import tag from '../../../assets/images/tag.svg'
import username from '../../../assets/images/info.svg'
import InputSwitch from "../../../shared/inputSwitch/inputSwitch";
import notification from '../../../assets/images/notification.svg'
import ModalNotification from "../../../shared/modalNotification/modalNotification";

interface ChatInfo {
    handleChatInfoHide: () => void,
    chatInfoShow: boolean
}

const chatInfo: FC <ChatInfo> = ({handleChatInfoHide, chatInfoShow}) => {

    // RESIZING
    const {handleMouseDown: handleChatsResize, blockSize: chatsSize} = useBlockResize(400, 500, 439, true)
    
    // NOTIFICATIONS
    const [notifications, setNotifications] = useState<boolean>(true)

    const handeNotificationToggle = () => {
        setNotifications(!notifications)
    }

    // CLICKBOARD COPY BUTTON
    const [modalAlert, setModalAlert] = useState(false);

    const handleModalAlertEnable = () => {
      setModalAlert(true);
    };
    
    const handleModalAlertDisable = () => {
      setModalAlert(false);
    };
    
    const copyUsername = () => {
      const text = "@sampleTag";
      navigator.clipboard.writeText(text);
      handleModalAlertEnable();
    };

    return(
        <div className={chatInfoShow? "chatInfo open" : "chatInfo close"}>
            
            <div className="chatInfo_resizer" onMouseDown={handleChatsResize}></div>

            <div className="chatInfo_container" style={{ width: `${chatsSize}px` }}>
                
                <div className="chatInfo_header">
                    <div className="chatInfo_header_cross" onClick={handleChatInfoHide}>
                        <img src={cross} alt="close" />
                    </div>
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
                    <div className="chatInfo_action_clickable" onClick={copyUsername}>
                        <img src={tag} alt="tag" />
                        <div className="chatInfo_action_infoContainer">
                            <div className="chatInfo_action_text">@sampletag</div>
                            <div className="chatInfo_action_explain">Username</div>
                        </div>
                    </div>

                    <div className="chatInfo_action">
                        <img src={username} alt="phone" />
                        <div className="chatInfo_action_infoContainer">
                            <div className="chatInfo_action_text">Короткое био с шуткой про твою мать, при чём био будет длинное, как и нос твоей матери чтоб я посмотрел на то как оно будет выглядеть в блоке</div>
                            <div className="chatInfo_action_explain">Bio</div>
                        </div>
                    </div>

                    <div className="chatInfo_action_switch" onClick={handeNotificationToggle}>
                        <img src={notification} alt="notification" />
                        <div className="chatInfo_action_switch_content">
                            <div className="chatInfo_action_text">Notifications</div>
                            <InputSwitch status = {notifications}/>
                        </div>
                    </div>
                    
                </div>
            </div>

            <ModalNotification enabled={modalAlert} enableChangeCallback={handleModalAlertDisable}  text="Copied to clickboard"/>

        </div>
    )
}

export default chatInfo