import React from "react";

import "../Chat/Chat.css";

import Dialogs from "./Dialogs/Dialogs";
import DialogCurrentContainer from "./Dialog_Current/DialogCurrentContainer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getIsAuth} from "../../selectors/selectors";




function Chat(props) {
    if (props.isAuth!=true){
        return  <Redirect to="SignUp"/>
    }
   return(
         <div className="wrapper_chat">
            <div className="wrapper__main_chat">
               <Dialogs />
               <DialogCurrentContainer/>
            </div>
         </div>
   )
}

let mapStateToProps =(state)=>{
    return{
        isAuth: getIsAuth(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{}),
)(Chat);
