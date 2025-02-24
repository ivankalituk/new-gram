import { FC } from "react";
import './chatPage.scss'
import Chats from "../../components/chatPage/chats/chats";
import Conversation from "../../components/chatPage/conversation/conversation";
import { useParams } from "react-router-dom";
import Modal from "../../shared/modal/modal";

const ChatPage: FC = () => {

    const {chatId} = useParams()

    
    return(
        <div className="chatPage">
            <Chats />

            {chatId && <Conversation />}

            <Modal />
        </div>
    )
}

export default ChatPage