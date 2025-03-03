import { FC, useEffect, useState } from "react";
import "./chatPage.scss";
import Chats from "../../components/chatPage/chats/chats";
import Conversation from "../../components/chatPage/conversation/conversation";
import { useParams } from "react-router-dom";

const ChatPage: FC = () => {
  const { chatId } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="chatPage">
      {(!chatId || !isMobile) && <Chats />}

      {chatId && <Conversation />}
    </div>
  );
};

export default ChatPage;
