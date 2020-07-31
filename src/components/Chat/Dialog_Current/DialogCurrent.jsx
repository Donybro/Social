import React from "react";

import "../Dialog_Current/Dialog_Current.css"
import Colluctor from "./Colluctor/Colluctor";
import DialogDownPanel from "./DownPanelDialog/DialogDownPanel";
import { Correspondence } from "./Correspondence/Correspondece";


function DiaologCurrent(props) {
      return (
            <div className="wrapper__dialogCurrent">
                  <Colluctor user={props.state}/>
                  <Correspondence state={props.state} />
                  <DialogDownPanel />
            </div>
      )
}

export default DiaologCurrent;