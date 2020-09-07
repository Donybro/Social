
import React, {useState} from "react";
import logout from "../../../../assets/auth/logout.png"
import userLogin from "../../../../assets/auth/Vector.png"
import "./Auth.css";
let AuthDropMenu = (props)=>{
        return (<div className={"authDropMenu"}>
                    <div className="auth__card_login">
                        <img src={userLogin} alt=""/>
                        <div>{props.login}</div>
                    </div>
                    <div className="auth__card_logout" onClick={props.logout}>
                        <img src={logout} alt=""/>
                        <div>Logout</div>
                    </div>

                </div>)
}

let Auth = (props)=>{
        let [showAuthMenu,setShowAuthMenu] = useState(false);

        let toggleShowAuthMenu = ()=>{
            setShowAuthMenu(showAuthMenu=>!showAuthMenu);
        }
            return (<div className="auth__card" onClick={toggleShowAuthMenu}>
                {Object.keys(props.photos).length>0 ? <img className="auth__card_photo" src={props.photos.small}/>:null}
                {
                    showAuthMenu? <AuthDropMenu {...props}/> : null
                }
                    </div>)

}
export  default  Auth