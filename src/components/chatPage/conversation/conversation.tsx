import { FC, useState } from "react";
import './conversation.scss'

import chatImgSample from '../../../assets/images/sampleChat.jpg'
import MessageInput from "../messageInput/messageInput";
import Message from "../message/message";
import ChatInfo from "../chatInfo/chatInfo";
import { Link } from "react-router-dom";
import arrow from '../../../assets/images/arrowLeft.svg'

const Conversation: FC = () => {

    const [chatInfoShow, setChatInfoShow] = useState<boolean>(true)

    const handleChatInfoShow = () => {
        setChatInfoShow(true)
    }

    const handleChatInfoHide = () =>{
        setChatInfoShow(false)
    }

    return(

        <div className="conversation">
            <div className="conversation_dialog">
                <div className="conversation_heading">
                    <Link to={'/'} className="conversation_heading_backLink">
                        <img src={arrow} alt="arrow" />
                    </Link>

                    <div className="conversation_heading_mainInfo" onClick={handleChatInfoShow}>
                        <img src={chatImgSample} alt="chatLogo" />
                        <div className="conversation_heading_mainInfo_info">
                            <div>Чат имени слоновьего поноса</div>
                            <div>23 members</div>
                        </div>
                    </div>
                </div>

                <div className="conversation_main">
                    <div className="conversation_main_messages">
                        <Message type="user"/>
                        <Message type="companion"/>
                    </div>

                    <MessageInput />
                </div>
            </div>

            <ChatInfo handleChatInfoHide={handleChatInfoHide} chatInfoShow={chatInfoShow} />
        </div>
    )
}

export default Conversation