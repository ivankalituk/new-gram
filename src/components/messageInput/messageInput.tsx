import { FC } from "react";
import './messageInput.scss'
import emoji from '../../assets/images/emoji.svg'


const MessageInput: FC = () => {
    return(
        <div className="messageInput">
            
            <div className="messageInput_bar">
                <img src={emoji} alt="emoji" />
                <input type="text" />
                <div className="messageInput_bar_attachments"></div>
            </div>
            
            <button className="messageInput_accept">
                ACCEPT
            </button>
        </div>
    )
}

export default MessageInput