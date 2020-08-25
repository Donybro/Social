import React from "react";
import { logout, setAuthUsersData} from "../../../../redux/auth-reducer";
import {connect} from "react-redux";
import Auth from "./Auth";


class AuthContainer extends React.Component {
    render() {
        if (!this.props.isAuth){
            return null;
        }
        return  <Auth {...this.props}/>
    }
}
let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
        login : state.auth.login,
    }
}

export  default  connect(mapStateToProps,{setAuthUsersData,logout})(AuthContainer);

