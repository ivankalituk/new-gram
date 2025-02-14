import { FC } from "react";
import './conversation.scss'

import chatImgSample from '../../assets/images/sampleChat.jpg'

const Conversation: FC = () => {
    return(

        <div className="conversation">
            <div className="conversation_heading">
                <div className="conversation_heading_mainInfo">
                    <img src={chatImgSample} alt="chatLogo" />
                    <div className="conversation_heading_mainInfo_info">
                        <div>Чат имени слоновьего поноса</div>
                        <div>23 members</div>
                    </div>
                </div>
            </div>

              <div className="conversation_main">
                SOME STUFF
              </div>
        </div>
    )
}

export default Conversation