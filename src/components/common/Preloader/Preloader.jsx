import React from "react";
import preloader from "../../../assets/preloader.svg";
import "./preloader.css"
let Preloader = (props)=>{
    return <div className="preloader__wrapper">
                <img className="preloader" src={preloader}/>
           </div>
}
export default  Preloader