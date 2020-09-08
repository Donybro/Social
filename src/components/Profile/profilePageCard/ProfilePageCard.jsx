import React, {useEffect, useState} from "react";

import "./ProfilePageCard.css"
import ProfilePageCardForm from "./ProfilePageCardForm";
import {reduxForm} from "redux-form";
import ProfilePageCardReduxForm from "./ProfilePageCardForm";
import ProfilePageCardFormContainer from "./ProfilePageCardForm";
import facebook from "./../../../assets/Profile/facebook.png"
import youtube from "./../../../assets/Profile/youtube.png"
import github from "./../../../assets/Profile/github.png"
import instagram from "./../../../assets/Profile/instagram.png"
import mainLink from "./../../../assets/Profile/mainLink.png"
import website from "./../../../assets/Profile/mainLink.png"
import vk from "./../../../assets/Profile/vk.png"
import twitter from "./../../../assets/Profile/twitter.png"

let logos ={
    facebook,youtube,github,instagram,mainLink,website,vk,twitter

}

let ProfilePageCard = (props) => {
    let photos = {...props.profile.photos};
    let [editMode, setEditMode] = useState(false);
    let [statusEditMode,setStatusEditMode] = useState(false);
    let isOwner ;
    if(props.myId != "undefined" && props.profile.userId !="undefined" &&props.myId===props.profile.userId){
        isOwner=true;

    }
    let contacts = props.profile.contacts;
    let activateStatusEditMode = () => {
        if(isOwner){
        setStatusEditMode(true);
        }
    }
    let diactivateStatusEditMode = () => {
        setStatusEditMode(false);
    }


    if(editMode){
        return <ProfilePageCardFormContainer setEditMode={setEditMode} {...props} />
    }
    else

    return <div className="profilePageCard__wrapper">
        {photos.large? <img src={photos.large} alt={ ""} className="profilePageCard_userPhoto"/> : <div className="profilePageCard_userPhoto"></div>}

                <div className="profilePageCard_userInfo">
                    <div className="profilePageCard_userName">{props.profile.fullName}</div>
                    {isOwner? <button className="profilePageCard_edit" onClick={()=>{setEditMode(true)}}>Edit</button> : null}
                    {/*<div className="profilePageCard_userActivity">*/}
                    {/*    <div className="profilePageCard_userActivity_friendsAmount"></div>*/}
                    {/*    <div className="profilePageCard_userActivity_postsAmount"></div>*/}
                    {/*</div>*/}
                </div>
                <div className="profilePageCard_UserDescription">
                    <div className={"profilePageCard_UserDescription_heads"}><div>Статус</div>
                        {statusEditMode &&
                        <input type={"text"} autoFocus={true} className={"profilePageCard__changeStatus_input"}
                               onBlur={() => { props.updateStatusTC(props.status); diactivateStatusEditMode()}}
                               onChange={(e) => {props.setStatus(e.currentTarget.value)}} value={props.status}/>}
                        {!statusEditMode &&  <p className={"profilePageCard_UserDescription_heads_status"} onDoubleClick={activateStatusEditMode}> {props.status}</p>}
                    </div>

                    <div className={"profilePageCard_UserDescription_heads"}><div>Ищет работу</div>
                        <p>{props.profile.lookingForAJob ? "да" : "нет"}</p>
                    </div>
                    <div className={"profilePageCard_UserDescription_heads"}><div>Ищет работу</div>
                        <p>{props.profile.lookingForAJobDescription||"пока ничего"}</p>
                    </div>
                    <div className={"profilePageCard_UserDescription_heads"}><div>Обо мне :</div>
                        <p>{props.profile.aboutMe||"пока ничего"}</p>
                    </div>
                    <div className={"profilePageCard_UserDescription_heads"}><div>Контакты</div>
                        {!contacts ? null : Object.keys(contacts).map(key=>{
                            return <Contacts key={key} siteName={key} profile={props.profile}/>
                        })}
                    </div>

                </div>

         </div>
}
export default ProfilePageCard;

let Contacts = ({siteName,...props})=>{
    return <div className={"contact"} ><img src={logos[siteName]} alt=""/><p> <a>{props.profile.contacts[siteName]}</a></p></div>
}
