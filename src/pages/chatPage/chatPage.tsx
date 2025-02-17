import { FC } from "react";
import './chatPage.scss'
import Chats from "../../components/chats/chats";
import Conversation from "../../components/conversation/conversation";
import { useParams } from "react-router-dom";

const ChatPage: FC = () => {

    const {chatId} = useParams()

    
    return(
        <div className="chatPage">
            <Chats />

            {chatId && <Conversation />}
        </div>
    )
}

export default ChatPage