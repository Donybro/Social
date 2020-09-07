import React from "react";
import Profile from "./Profile";
import "./profileContainer.css"
import {connect} from "react-redux";
import {getProfileTC, setProfilePhoto, setStatusAC, setUserProfile, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getMyId, getProfile, getStatus} from "../../selectors/selectors";

class ProfileContainer extends  React.Component{
    componentDidMount() {
        this.props.getProfileTC(this.props.match.params.userId,this.props.myId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId!=prevProps.match.params.userId){
            this.props.getProfileTC(this.props.match.params.userId,this.props.myId);
        }
    }



    render(){

        return <div className="profileContainer__wrapper">
                    <Profile {...this.props}/>
                </div>
    }
}

const mapStateToProps = (state)=> {
    return {
        profile : getProfile(state),
        status: getStatus(state),
        myId : getMyId(state),

    }
}

export default compose(
    connect(mapStateToProps,{setUserProfile,getProfileTC,setStatusAC,updateStatusTC,setProfilePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)