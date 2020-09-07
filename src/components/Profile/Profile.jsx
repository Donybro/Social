import React from "react";
import ProfilePageCard from "./profilePageCard/ProfilePageCard";
import "./profile.css"
import bgPhoto from "../../assets/Profile/1.jpg";
let Profile  = (props)=>{
    return  <div className="profile__wrapper">
                <div className="profilePage">
                        <div className="profilePage__background_photo"><img src={bgPhoto} alt=""/></div>
                        <ProfilePageCard myId={props.myId} isOwner={props.isOwner} setProfilePhoto={props.setProfilePhoto} profile={props.profile} status={props.status} setStatus={props.setStatusAC} updateStatusTC={props.updateStatusTC}/>

                </div>
            </div>
}
export default Profile
