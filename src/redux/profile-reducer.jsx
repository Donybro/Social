import API from "../api/API";

const SET_USER_PROFILE = "SOCIAL/PROFILE/SET_USER_PROFILE";
const ON_CHANGE_ADD_POST = "SOCIAL/PROFILE/ON_CHANGE_ADD_POST";
const SET_STATUS = "SOCIAL/PROFILE/SET_STATUS";
const  ADD_POST = "SOCIAL/PROFILE/ADD_POST"
const  PROFILE_PHOTO_SETED = "SOCIAL/PROFILE/PROFILE_PHOTO_SETED"
const  IS_OWNER = "SOCIAL/PROFILE/IS_OWNER"


let initialState = {
posts:[        {id:1,massage:"HELLO",time:new Date()},
               {id:2,massage:"HI",time:new Date()},
               {id:3,massage:"dsdsds",time:new Date()},
               {id:4,massage:"dsdsd",time:new Date()},
               {id:5,massage:"sd222sd",time:new Date()},
               {id:6,massage:"2323",time:new Date()},
               {id:7,massage:"dsdsdsdqq211",time:new Date()},
    ],
    newPostText:"",
    profile : {},
    status:"",
    isOwner:true,

}


function profileReducer(state = initialState,action){
    let copyState ;
    switch (action.type) {
        case ADD_POST :
            if(action.text==="")return 0;
             let idCounter = 9;
             let time = new Date();
            return {
                ...state,
                posts: [...state.posts,{id:idCounter++,massage:action.text,time:time}]
            };
        case  ON_CHANGE_ADD_POST:
            copyState = {...state}
            copyState.newPostText=action.massage;
            return copyState;
        case  SET_USER_PROFILE:
            copyState = {
                    ...state,
                    profile: action.profile }
            return copyState;
        case SET_STATUS:
            copyState = {
                    ...state,
                    status: action.status };
            return copyState;
        case PROFILE_PHOTO_SETED:
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos},
                };
        case IS_OWNER:
                return {
                    ...state,
                    isOwner: false,
                };
        default:
            return  state;
    }
}

export default profileReducer;

export const addPostActionCreator = (postText)=>{
   return {
       type: ADD_POST,
       text : postText
    }
 };
 export const onChangeAddPostActionCreator = (msg)=>{
    return {
        type : ON_CHANGE_ADD_POST,
        massage : msg,   
     }
  };
export const setUserProfile = (profileObj)=>{
    return {
        type : SET_USER_PROFILE,
        profile : profileObj,
    }
};
export const profilePhotoSeted = (photos)=>{
    return {
        type : PROFILE_PHOTO_SETED,
        photos,
    }
};
export const isOwner = ()=>{
    return {
        type : IS_OWNER,
    }
};
export const setStatusAC=(status)=>{
    return {
        type : SET_STATUS,
        status:status,
    }
}
export const updateStatusTC=(status)=>{
    return (dispatch)=>{
   API.updateStatus(status)
       .then(response=>{
           if(response.data.resultCode===0){
               dispatch(setStatusAC(status));
           }
       })
}}
export const setProfilePhoto=(photo)=>{
    return (dispatch)=>{
   API.setProfilePhoto(photo)
       .then(response=>{
           dispatch(profilePhotoSeted(response.data.data.photos))
       })
}}
export const setProfileSettingsTC=(obj)=>{
    return (dispatch)=>{
   return API.setProfileSettings(obj)
       .then(response=>{
           console.log(response)
           if(response.data.resultCode===0){
                dispatch(setUserProfile(obj));
           }
       })
}}
export const getProfileTC = (userId,myId)=>{
    return (dispatch)=>{
        if(!userId){
            userId=myId;
        }
        if(userId!==myId){
            dispatch(isOwner());
        }
        API.getProfile(userId).then(response=>{
            dispatch(setUserProfile(response.data))
        }).then(
            API.getProfileStatus(userId)
                .then(data=>{
                    dispatch(setStatusAC(data.data));
                    }
                )
        )

}};







