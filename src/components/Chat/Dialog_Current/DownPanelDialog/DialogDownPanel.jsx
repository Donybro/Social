import React from "react";

import "./DialogDownPanel.css";
import {Field} from "redux-form";

function DialogDownPanel(props) {
    return (
        <form onSubmit={props.handleSubmit}>
                <div className="currentDialog__downpanel">
                    <div className="downpanel__menu">
                        <div className="currentDialog__downpanel_smile">
                            <img src="/images/current_dialog/smile.png" alt=""/>
                        </div>
                        <div className="currentDialog__downpanel_addPicture">
                            <img src="/images/current_dialog/addPicture.png" alt=""/>
                        </div>
                            <Field component={"textarea"}
                                   name={"massage"}
                                   className="currentDialog__downpanel__textarea"
                                   placeholder="type something..."
                            />
                            <button className="currentDialog__downpanel_send">
                                <img src="/images/current_dialog/send.png" alt=""/>
                            </button>
                    </div>
                </div>
        </form>
    )
}

export default DialogDownPanel;