import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../selectors/selectors";


let mapStateToProps=(state)=> {
    return {
        isAuth: getIsAuth(state)
    }
}


const withAuthRedirect = (Component)=>{
     class RedirectComponent extends React.Component{
        render() {
           if(!this.props.isAuth){
               return <Redirect to={"SignUp"}/>
           }
           return <Component {...this.props}/>
        }
    }
    let connectedRedirectComponent =connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent;
}

export  default withAuthRedirect;