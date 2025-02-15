import { FC, useState } from "react";
import './messageInput.scss'
import emoji from '../../assets/images/emoji.svg'
import clip from '../../assets/images/clip.svg'
import SendMessageSVG from "../../assets/controled images/sendMessageSVG";

const MessageInput: FC = () => {

    const [acceptHover, setAcceptHover] = useState<boolean>(false)

    const enableAcceptHover = () => {
        setAcceptHover(true)
    }

    const disableAcceptHover = () => {
        setAcceptHover(false)
    }

    return(
        <div className="messageInput">
            
            <div className="messageInput_bar">
                <img src={emoji} alt="emoji" />
                <input type="text" placeholder="Message"/>
                <img src={clip} alt="clip" className="messageInput_bar_attachments"/>
            </div>
            
            <button className="messageInput_accept" onMouseEnter={enableAcceptHover} onMouseLeave={disableAcceptHover}>
                <div><SendMessageSVG color={acceptHover? "#FFFFFF" : "#766ac8"}/></div>
            </button>
        </div>
    )
}

export default MessageInput