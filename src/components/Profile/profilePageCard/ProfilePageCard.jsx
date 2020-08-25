import React, {useState} from "react";

import "./ProfilePageCard.css"

let ProfilePageCard = (props)=>{

let [editMode,setEditMode] =  useState(false);

    let  activateEditMode =()=>{
        setEditMode(true);
    }
    let  diactivateEditMode =()=>{
        setEditMode(false);
    }
    let photos= {...props.profile.photos};

    return <div className="profilePageCard__wrapper">
                <img src={photos.large} className="profilePageCard_userPhoto"/>

                <div className="profilePageCard_userInfo">
                    <div className="profilePageCard_userName">{props.profile.fullName}</div>
                    <div className="profilePageCard_userActivity">
                        <div className="profilePageCard_userActivity_friendsAmount"></div>
                        <div className="profilePageCard_userActivity_postsAmount"></div>
                    </div>
                </div>
                <div className="profilePageCard_UserDescription">
                    { editMode && <input type={"text"} autoFocus={true} className={"profilePageCard__changeStatus_input"} onBlur={()=>{props.updateStatusTC(props.status);diactivateEditMode()}} onChange={(e)=>{props.setStatus(e.currentTarget.value)}} />}
                    { !editMode &&  <p onDoubleClick={activateEditMode}> {props.status}</p> }
                </div>
            </div>
}
export default ProfilePageCard;