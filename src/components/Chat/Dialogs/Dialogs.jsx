import React from "react";

import "./Dialogs.css"
import Massage from "./Massage/Massage";
import MassageContainer from "./Massage/massageContainer";

function Dialogs(props) {
   return (
      <div className="wrapper_dialogs">
         <div className="dialogs__block__search_block">
            <div className="dialogs__block__search_profile">
               <input className="dialogs__block__find-input" type="text" placeholder="profile" />
               <img className="dialogs__block_find-icon" src="/images/dialogs/Vector-8.png" alt="" />
            </div>
         </div>
         <div className="dialogs__block">
            <MassageContainer/>
         </div>
      </div>
   )
}
export default Dialogs;