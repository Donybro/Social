import React from "react";

import "./DialogDownPanel.css";


function DialogDownPanel(params) {
   return (
      <div className="currentDialog__downpanel">
         <div className="downpanel__menu">
            <div className="currentDialog__downpanel_smile">
               <img src="/images/current_dialog/smile.png" alt="" />
            </div>
            <div className="currentDialog__downpanel_addPicture">
               <img src="/images/current_dialog/addPicture.png" alt="" />
            </div>
            <input type="text" className="currentDialog__downpanel__textarea" placeholder="type something..." />
            <div className="currentDialog__downpanel_send">
               <img src="/images/current_dialog/send.png" alt="" />
            </div>
         </div>
      </div>
   )
}
export default DialogDownPanel;