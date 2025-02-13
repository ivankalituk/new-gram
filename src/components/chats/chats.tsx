import { FC } from "react"
import './chats.scss'
import SearchBar from "../searchBar/searchBar";
import BurgerButton from "../burgerButton/burgerButton";
import { useBlockResize } from "../../hooks/useBlockResize";
import NoScrollList from "../noScrollList/noScrollList";

const Chats: FC = () => {

    const {handleMouseDown: handleChatsResize, blockSize: chatsSize} = useBlockResize(256, 636, 300)

    return (
        <div className="chats">
            <div className="chats_container" style={{ width: `${chatsSize}px` }}>
                <div className="chats_header">
                    <BurgerButton />
                    <SearchBar />
                </div>

                <NoScrollList />

            </div>
            
            <div className="chats_resizer" onMouseDown={handleChatsResize}></div>
        </div>
    );
};

export default Chats