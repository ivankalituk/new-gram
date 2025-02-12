import { FC } from "react";
import './burgerButton.scss'

const BurgerButton: FC = () => {
    return(
        <div className="burgerButton">
            <div className="burgerButton_bar"></div>
            <div className="burgerButton_bar"></div>
            <div className="burgerButton_bar"></div>
        </div>
    )
}

export default BurgerButton