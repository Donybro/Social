import React from "react";

import "./DialogDownPanel.css";

import {onChangeSendMassageActionCreator,sendMassageActionCreator} from"../../../../redux/chat-reducer"

function DialogDownPanel(props) {
   let el = React.createRef();

   function sendMassage(){
      props.dispatch(sendMassageActionCreator())
      
   }

   function onChangeSendMassage(){
      props.dispatch(onChangeSendMassageActionCreator(el.current.value))
   }
   return (
      <div className="currentDialog__downpanel">
         <div className="downpanel__menu">
            <div className="currentDialog__downpanel_smile">
               <img src="/images/current_dialog/smile.png" alt="" />
            </div>
            <div className="currentDialog__downpanel_addPicture">
               <img src="/images/current_dialog/addPicture.png" alt="" />
            </div>
            <input type="text"
                   ref={el} 
                   className="currentDialog__downpanel__textarea" 
                   placeholder="type something..."
                   value={props.state.currentMassage}
                   onChange={onChangeSendMassage} 
                   />
            <div className="currentDialog__downpanel_send" onClick = {sendMassage}>
               <img src="/images/current_dialog/send.png" alt="" />
            </div>
         </div>
      </div>
   )
}
export default DialogDownPanel;