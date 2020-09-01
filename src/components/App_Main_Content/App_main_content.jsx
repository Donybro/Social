import React from 'react';

import SideBar from "../App_Main_Content/SideBar/side_bar";
import Posts from "../App_Main_Content/Posts/posts";
import {connect} from "react-redux";
import {getAuthMeThunkCreator} from "../../redux/auth-reducer";

import "./AppMainContent.css"
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class AppMainContent extends React.Component{
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
        isAuth:state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{getAuthMeThunkCreator}),
    withAuthRedirect,
)(AppMainContent);

