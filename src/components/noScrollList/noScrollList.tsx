import { FC, useRef, useState } from "react";
import './noScrollList.scss'
const NoScrollList: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<number>(0) 
    const folders = ["Все", "Работа", "Личное", "Избранное", "Группы", "Каналы", "Боты"];


    const handleClick = (index: number) => {
      if (containerRef.current) {
        const items = containerRef.current.children as HTMLCollectionOf<HTMLElement>;
        const selectedItem = items[index];
  
        selectedItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

        setSelectedItem(index)
      }
    // сделать колбек с результатом   
    };
  
    return (
      <div ref={containerRef} className="noScrollList">
        {folders.map((folder, index) => (
          <button key={index} className={selectedItem === index? "noScrollList_item active" : "noScrollList_item"} onClick={() => handleClick(index)}>
            <div className="noScrollList_item_text">{folder}</div>
            {selectedItem === index && <div className="noScrollList_item_line"></div>}
          </button>
        ))}
      </div>
    );
}

export default NoScrollList