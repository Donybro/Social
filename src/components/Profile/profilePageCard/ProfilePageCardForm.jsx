import React, {useState} from "react";

import "./ProfilePageCard.css"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setProfileSettingsTC} from "../../../redux/profile-reducer";
import {getMyId} from "../../../selectors/selectors";
import photo from "../../../assets/Profile/PHOTO.PNG";
let ProfilePageCardForm = (props) => {
    let photos = {...props.profile.photos};

    let [statusEditMode, setStatusEditMode] = useState(false);
    let activateStatusEditMode = () => {
        setStatusEditMode(true);
    }
    let diactivateStatusEditMode = () => {
        setStatusEditMode(false);
    }

    return(
    <form onSubmit={props.handleSubmit}>
        <div className="profilePageCard__wrapper">
            <img src={photos.large} className="profilePageCard_userPhoto"/>
            <div className="profilePageCard_changePhoto">
                <label htmlFor="changePhoto" >
                    <img src={photo} alt=""/>
                </label>
                <input id="changePhoto" name={"changePhoto"} type="file" onChange={(e) => {
                    props.setProfilePhoto(e.target.files[0])
                }}>
                </input>
            </div>

            <div className="profilePageCard_userInfo">
                <div className="profilePageCard_userName">{props.profile.fullName}</div>
            </div>
            <div className="profilePageCard_UserDescription">
                <div className="profilePageCard_UserDescription_blank"> <div>Имя пользователя</div>
                    <Field className="profilePageCard_UserDescription_blank_userName" component={"input"} name={"fullName"}/>
                </div>
                <div className="profilePageCard_UserDescription_blank">
                    <div>Ищет работу</div>
                    <Field className="profilePageCard_UserDescription_blank_lookingForJob" component={"input"} type={"checkbox"} name="lookingForAJob"/>
                </div>
                <div className="profilePageCard_UserDescription_blank"><div>Описание <br/> для работадателей</div>
                    <Field className="profilePageCard_UserDescription_blank_workDescription" component={"textarea"} name={"lookingForAJobDescription"}/>
                </div>
                <div className="profilePageCard_UserDescription_blank" ><div>Обо мне</div>
                    <Field className="profilePageCard_UserDescription_blank_abouMe" component={"textarea"} name={"aboutMe"}/>
                </div>
                <div className="profilePageCard_UserDescription_blank">
                    <div>Контакты</div>
                    <div className="profilePageCard_UserDescription_contact_blank_contacts">
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                            <div>github</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.github"}/>
                        </div>

                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                            <div>vk</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.vk"}/>
                        </div>
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                           <div> facebook</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.facebook"}/>
                        </div>
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                            <div>instagram</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.instagram"}/>
                        </div>
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                           <div> twitter</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.twitter"}/>
                        </div>
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                           <div> website</div>
                                <Field className={"contactForm"} component={"input"} name={"contacts.website"}/>
                        </div>
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                            <div>youtube</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.youtube"}/>
                        </div>
                        <div className="profilePageCard_UserDescription_contact_blank_contacts_item">
                            <div>mainLink</div>
                            <Field className={"contactForm"} component={"input"} name={"contacts.mainLink"}/>
                        </div>
                    </div>
                </div>

                <button className="profilePageCard_save_btn">Save</button>
            </div>
        </div>
    </form>)

}

let ProfilePageCardFormContainer = (props) => {
    let saveChangings = (formData) => {
        console.log(formData)
        props.setProfileSettingsTC(formData)
            .then(props.setEditMode(false));

    }
    return <ProfilePageCardReduxForm initialValues={props.profile}  {...props} onSubmit={saveChangings}/>
}
let ProfilePageCardReduxForm = reduxForm({form: "profileForm"})(ProfilePageCardForm)

let mapStateToProps = (state) => ({
    userId: getMyId(state)
})

export default connect(mapStateToProps, {setProfileSettingsTC})(ProfilePageCardFormContainer);


/*

console.log(props.profile)
    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }
    let diactivateEditMode = () => {
        setEditMode(false);
    }
    let photos = {...props.profile.photos};



        <div className="profilePageCard_userInfo">
            <div className="profilePageCard_userName">{props.profile.fullName}</div>
            <div className="profilePageCard_userActivity">
                <div className="profilePageCard_userActivity_friendsAmount"></div>
                <div className="profilePageCard_userActivity_postsAmount"></div>
            </div>
            <div className="profilePageCard_changePhoto">
                <input type="file" onChange={(e) => {
                    props.setProfilePhoto(e.target.files[0])
                }}/>
            </div>
        </div>
        <div className="profilePageCard_UserDescription">
            {editMode &&
            <input type={"text"} autoFocus={true} className={"profilePageCard__changeStatus_input"} onBlur={() => {
                props.updateStatusTC(props.status);
                diactivateEditMode()
            }} onChange={(e) => {
                props.setStatus(e.currentTarget.value)
            }}/>}
            {!editMode && <p onDoubleClick={activateEditMode}> {props.status}</p>}
        </div>
    </div>
* */