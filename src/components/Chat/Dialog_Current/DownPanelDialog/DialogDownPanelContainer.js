import DialogDownPanel from "./DialogDownPanel";
import {sendMassageAC} from "../../../../redux/chat-reducer"
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import React from "react";
import {getCurrentMassage} from "../../../../selectors/selectors";

let mapStateToProps = (state)=>{
    return {
        currentMassage: getCurrentMassage(state)
    }

}

let DialogDownPanelContainer =(props)=>{
    const sendMassage=(formData)=>{
        props.sendMassageAC(formData.massage);
    }
    return(
        <DialogDownPanelReduxForm onSubmit={sendMassage}/>
    )
}
let DialogDownPanelReduxForm = reduxForm({form:"sendMassageForm"})(DialogDownPanel)

export  default compose(
    connect(mapStateToProps,{sendMassageAC})
)(DialogDownPanelContainer)