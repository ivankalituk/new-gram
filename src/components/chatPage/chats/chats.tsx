import { FC } from "react"
import './chats.scss'
import SearchBar from "../../../shared/searchBar/searchBar";
import BurgerButton from "../../../shared/burgerButton/burgerButton";
import { useBlockResize } from "../../../hooks/useBlockResize";
import NoScrollList from "../../../shared/noScrollList/noScrollList";
import Chat from "../chat/chat";

const Chats: FC = () => {

    const {handleMouseDown: handleChatsResize, blockSize: chatsSize} = useBlockResize(256, 636, 300, false)

    return (
        <div className="chats" style={{ maxWidth: `${chatsSize + 2}px` }}>
            <div className="chats_container" style={{ maxWidth: `${chatsSize}px` }}>
                <div className="chats_header">
                    <BurgerButton />
                    <SearchBar />
                </div>

                <div className="chats_main">
                    <NoScrollList />

                    <div className="chats_chatsList_list">
                        <Chat />
                        <Chat />
                        <Chat /> 
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                    </div>
                </div>

            </div>
            
            <div className="chats_resizer" onMouseDown={handleChatsResize}></div>
        </div>
    );
};

export default Chats