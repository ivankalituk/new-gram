import { FC } from "react";
import './burgerButton.scss'
import { createRipple } from "../../utils/rippleAnimation";

const BurgerButton: FC = () => {
    return(
        <div className="burgerButton" onClick={createRipple}>
            <div className="burgerButton_container" >
                <div className="burgerButton_bar"></div>
                <div className="burgerButton_bar"></div>
                <div className="burgerButton_bar"></div>
            </div>
        </div>
    )
}

export default BurgerButton