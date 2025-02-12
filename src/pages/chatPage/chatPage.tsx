import { FC } from "react";
import './chatPage.scss'
import Chats from "../../components/chats/chats";
const ChatPage: FC = () => {
    return(
        <div className="chatPage">
            <Chats />
        </div>
    )
}

export default ChatPage