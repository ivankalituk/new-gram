import { FC } from "react";
import './inputSwitch.scss'

interface InputSwitch {
    status: boolean
}

const InputSwitch: FC <InputSwitch>= ({status}) => {



    return(
        <div className="inputSwitch">
            <div className={status? "inputSwitch_bar active" : "inputSwitch_bar"} >
                <div className={status? "inputSwitch_switch_thumb active" : "inputSwitch_switch_thumb"}></div>
            </div>
        </div>
    )
}

export default InputSwitch