import React from "react";

import "../Correspondence/Correspondence.css";



function CorrespondenceMassage(props){
      return(
            props.state.map( (msg)=>{
               return(
                  <div className={msg.msgDirection}> {msg.text} </div>
               )
            })
      )
}

export function  Correspondence(props) {
      return(
         <div className="correspondence__wrapper">
                     <CorrespondenceMassage state={props.state}  / >
         </div>
      )
}







