import { FC } from "react";
import './modalMessage.scss'
import sampleImg from '../../assets/images/sampleChat.jpg'


const ModalMessage: FC = () => {
    return(
        <div className="modalMessage">
            <img src={sampleImg} alt="" />

            <div className="modalMessage_content">
                <div className="modalMessage_content_userName">Чат имени слоновьего поноса поноса поноса поноса</div>
                <div className="modalMessage_content_text">ДЛИННЫЙ ДЛИННЫЙ текст текст текст текст тексттекст текст текст текст текст текст текст текст текст </div>
            </div>
        </div>
    )
}

export default ModalMessage