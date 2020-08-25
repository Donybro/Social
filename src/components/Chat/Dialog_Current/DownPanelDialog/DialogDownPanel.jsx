import React from "react";
import addPictureIcon from "../../../../assets/current_dialog/addPicture.png"
import addSmileIcon from "../../../../assets/current_dialog/smile.png"
import sendIcon from "../../../../assets/current_dialog/send.png"

import "./DialogDownPanel.css";
import {Field} from "redux-form";



function DialogDownPanel(props) {
    return (
        <form onSubmit={props.handleSubmit}>
                <div className="currentDialog__downpanel">
                    <div className="downpanel__menu">
                        <div className="currentDialog__downpanel_smile">
                            <img src={addSmileIcon} alt=""/>
                        </div>
                        <div className="currentDialog__downpanel_addPicture">
                            <img src={addPictureIcon} alt=""/>
                        </div>
                            <Field component={"textarea"}
                                   name={"massage"}
                                   className="currentDialog__downpanel__textarea"
                                   placeholder="type something..."
                            />
                            <button className="currentDialog__downpanel_send">
                                <img src={sendIcon} alt=""/>
                            </button>
                    </div>
                </div>
        </form>
    )
}

export default DialogDownPanel;