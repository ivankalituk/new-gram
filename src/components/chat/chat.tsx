import { FC } from "react";
import './chat.scss'
import sampleChatImg from '../../assets/images/sampleChat.jpg'
import MutedSVG from "../../assets/controled images/mutedSVG";
import { createRipple } from "../../utils/rippleAnimation";
import { Link } from "react-router-dom";

const Chat: FC = () => {
    return(
        <Link className="chat" onClick={createRipple} to={`/chat/${1}`}>
            <img src={sampleChatImg} alt="chatImg" />
            
            <div className="chat_info">
                <div className="chat_info_main">
                    <div className="chat_info_main_firstBlock">
                        <div className="chat_info_name">{"Chat name"}</div>
                        <div className="chat_info_muted"><MutedSVG /></div>
                    </div>

                    <div className="chat_info_main_secondBlock">
                        <div className="chat_info_status"></div>
                        <div className="chat_info_time">{"Fri"}</div>
                    </div>
                </div>

                <div className="chat_info_messange"><span>You:</span>{" Last message sample text long long "}</div>
            </div>
        </Link>
    )
}

export default Chat
