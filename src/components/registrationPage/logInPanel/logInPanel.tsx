import { FC } from "react";
import './logInPanel.scss'

// GOOGLE LOG IN
// SIMPLE LOG IN
// RETURN TO REGISTRATION

const LogInPanel: FC = () => {
    return(
        <div className="logInPanel">
            <input type="text" />
            <input type="password" />

            <button>Registration</button>
        </div>
    )
}

export default LogInPanel