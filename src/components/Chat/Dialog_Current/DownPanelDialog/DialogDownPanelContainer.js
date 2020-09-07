import DialogDownPanel from "./DialogDownPanel";
import {sendMassageAC} from "../../../../redux/chat-reducer"
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm,reset} from "redux-form";
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
const afterSubmit = (result, dispatch) =>
    dispatch(reset('sendMassageForm'));

let DialogDownPanelReduxForm = reduxForm({form:"sendMassageForm",onSubmitSuccess:afterSubmit})(DialogDownPanel)

export  default compose(
    connect(mapStateToProps,{sendMassageAC})
)(DialogDownPanelContainer)