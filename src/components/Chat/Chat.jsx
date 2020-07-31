import React from "react";

import "../Chat/Chat.css";
import MenuBar from "./MenuBar/menu_bar";
import Dialogs from "./Dialogs/Dialogs";
import DialogCurrent from "./Dialog_Current/DialogCurrent";

function Chat(props) {
   return(
         <div className="wrapper_chat">
            <MenuBar />
            <div className="wrapper__main_chat">
               <Dialogs state={props.state.dialogsBlock}/>
               <DialogCurrent state ={props.state.currentDialogs} />
            </div>
         </div>
   )
}
export default Chat;
