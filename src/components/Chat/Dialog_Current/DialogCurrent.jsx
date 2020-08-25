import React from "react";

import "../Dialog_Current/Dialog_Current.css"
import Colluctor from "./Colluctor/Colluctor";
import { Correspondence } from "./Correspondence/Correspondece";
import DialogDownPanelContainer from "./DownPanelDialog/DialogDownPanelContainer";


function CurrentDialog(props) {
      return (
            <div className="wrapper__dialogCurrent">
                  <Colluctor/>
                  <Correspondence currentDialogs={props.currentDialogs} />
                  <DialogDownPanelContainer />
            </div>
      )
}

export default CurrentDialog;