import React from 'react';

import SideBar from "../App_Main_Content/SideBar/side_bar";
import Posts from "../App_Main_Content/Posts/posts";
import {connect} from "react-redux";
import {getAuthMeThunkCreator} from "../../redux/auth-reducer";

import "./AppMainContent.css"
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfileTC} from "../../redux/profile-reducer";

class AppMainContent extends React.Component{
    componentDidMount() {
        this.props.getProfileTC(this.props.userId);
    }

    render(){
       return (
            <div className="wrapper_main">
                <div className="App">
                    <div>
                        <div className="wrapper">
                            <SideBar  />
                            <Posts />
                        </div>)
                    </div>
                </div>
            </div>
        )}
    }

 const mapStateToProps = (state)=>{
    return{
        isAuth:state.auth.isAuth,
        userId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps,{getAuthMeThunkCreator,getProfileTC}),
    withAuthRedirect,
)(AppMainContent);

