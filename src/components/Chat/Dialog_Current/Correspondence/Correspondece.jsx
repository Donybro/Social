import React from "react";

import "../Correspondence/Correspondence.css";



function CorrespondenceMassage(props){
      return(
            props.currentDialogs.map( (msg)=>{
               return(
                  <div className={msg.msgDirection}> {msg.text} </div>
               )
            })
      )
}

export function  Correspondence(props) {
      return(
         <div className="correspondence__wrapper">
                     <CorrespondenceMassage currentDialogs={props.currentDialogs}  />
         </div>
      )
}







