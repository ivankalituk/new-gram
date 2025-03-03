import { FC } from "react";
import "./modal.scss";

const Modal: FC = () => {
  return (
    <div className="modal">
      <div className="modal_content">МЕСТО ДЛЯ МОДАЛЬНОГО КОМПОНЕНТА</div>

      <div className="modal_background"></div>
    </div>
  );
};

export default Modal;
