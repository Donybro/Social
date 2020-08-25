
import React from "react";

import "./Auth.css";


let Auth = (props)=>{
            return (<div className="auth__card">
                        <div className="auth__card_photo"></div>
                        <div className="auth__card_login">{props.login}</div>
                        <div className="auth__card_logout" onClick={props.logout}>exit</div>
                    </div>)

}
export  default  Auth