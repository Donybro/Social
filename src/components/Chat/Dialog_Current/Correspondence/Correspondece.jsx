import React, {useEffect, useRef} from "react";

import "../Correspondence/Correspondence.css";



function CorrespondenceMassage(props){
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [props.currentDialogs]);
      return(
            props.currentDialogs.map( (msg)=>{
               return(<>
                      <div className={msg.msgDirection} key={msg.id}> {msg.text} </div>
                        <div ref={messagesEndRef}></div>
                   </>)
            })
      )
}

export function  Correspondence(props) {

      return(
         <div className="correspondence__wrapper" >
                     <CorrespondenceMassage currentDialogs={props.currentDialogs}   />
         </div>
      )
}







