import React from "react";
import { logout, setAuthUsersData} from "../../../../redux/auth-reducer";
import {connect} from "react-redux";
import Auth from "./Auth";
import {getProfile} from "../../../../selectors/selectors";


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
        userId:state.auth.userId,
        login : state.auth.login,
        userProfile : getProfile(state),
        photos:state.auth.photos
    }
}

export  default  connect(mapStateToProps,{setAuthUsersData,logout})(AuthContainer);

