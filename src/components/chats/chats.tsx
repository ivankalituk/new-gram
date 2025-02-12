import { FC, useEffect, useState } from "react"
import './chats.scss'
import SearchBar from "../searchBar/searchBar";
import BurgerButton from "../burgerButton/burgerButton";

const Chats: FC = () => {

    // ПЕРЕДЕЛАТЬ В ХУК
    const [chatsWidth, setChatsWidth] = useState<number>(300)
    const [isChatsResizing, setIsChatResizing] = useState<boolean>(false)

    const handleMouseDown = () => {
        setIsChatResizing(true)
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isChatsResizing) return
        setChatsWidth((prev) => {
            const newWidth = prev + e.movementX;
            return Math.min(Math.max(newWidth, 256), 636);
        });
    }

    const handleMouseUp = () => {
        setIsChatResizing(false)
    }

    useEffect(() => {
        if (isChatsResizing) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isChatsResizing])

    return (
        <div className="chats">
            <div className="chats_container" style={{ width: `${chatsWidth}px` }}>
                <div className="chats_header">
                    <BurgerButton />
                    <SearchBar />
                </div>
            </div>
            
            <div className="chats_resizer" onMouseDown={handleMouseDown}></div>
</div>
    );
};

export default Chats