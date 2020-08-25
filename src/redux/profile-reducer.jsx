import API from "../api/API";

const SET_USER_PROFILE = "SOCIAL/PROFILE/SET_USER_PROFILE";
const ON_CHANGE_ADD_POST = "SOCIAL/PROFILE/ON_CHANGE_ADD_POST";
const SET_STATUS = "SOCIAL/PROFILE/SET_STATUS";
const  ADD_POST = "SOCIAL/PROFILE/ADD_POST"


let initialState = {
posts:[        {id:1,massage:"HELLO"},
               {id:2,massage:"HI"},
               {id:3,massage:"dsdsds"},
               {id:4,massage:"dsdsd"},
               {id:5,massage:"sd222sd"},
               {id:6,massage:"2323"},
               {id:7,massage:"dsdsdsdqq211"},
    ],
    newPostText:"",
    profile : {},
    status:"",

}


function profileReducer(state = initialState,action){
    let copyState ;
    switch (action.type) {
        case ADD_POST :
            if(action.text==="")return 0;
            return {
                ...state,
                posts: [...state.posts,{id:8,massage:action.text}]
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
export const getProfileTC = (userId,myId)=>{
    return (dispatch)=>{
        if(!userId){
            userId=myId;
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







