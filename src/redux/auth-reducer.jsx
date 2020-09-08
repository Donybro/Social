import API from "../api/API";
import {stopSubmit} from "redux-form";
import {Redirect} from "react-router-dom";
import AddNewPostContainer from "../components/App_Main_Content/SideBar/AddNewPost/addNewPostContainer";
import React from "react";
const  AUTH = "SOCIAL/AUTH/AUTH";
const  LOGOUT = "SOCIAL/AUTH/LOGOUT";
const SET_AUTH_USERS_DATA = "SOCIAL/AUTH/SET_AUTH_USERS_DATA"
const SET_USER_PHOTO = "SOCIAL/AUTH/SET_USER_PHOTO"

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth : false,
    photos:{}
}
function authReducer(state = initialState,action){
      switch (action.type) {
          case SET_AUTH_USERS_DATA:
              return   {
                  ...state,
                  ...action.data,
              }
          case AUTH:
              return {
                  ...state,
                  isAuth: action.isAuth,
              }
          case SET_USER_PHOTO:
              return {
                  ...state,
                 photos:action.photos
              }
         default:
            return state;
      }
}
export const setAuthUsersData = (userId,email,login)=>{
    return {
        type:SET_AUTH_USERS_DATA,
        data:{userId,email,login}
    }
}
export  const getAuthMeThunkCreator =() =>{
    return (dispatch)=>{
       return  API.getAuthMe()
            .then(response=>{
            if(response.data.resultCode===0){
                let {id, email, login} = response.data.data;
                dispatch(setAuthUsersData(id, email, login));
                dispatch(isAuthAC(true));
                dispatch(getUserPhotoTC(id))
                    .then(photos=>{
                        dispatch(setUserPhotoAC(photos))})
            }
        })
    }
}
export default authReducer;

export  const login = (email,password,rememberMe)=>{
    return (dispatch)=>{
        if(email==="free@samuraijs.com"&&password==="free"){
            email = "doniyorrahmanov957@mail.ru";
            password ="3177431d"
        }
        API.login(email,password,rememberMe)
            .then(response=>{
                if(response.data.resultCode===0){
                    dispatch(getAuthMeThunkCreator());
                }else{
                    let errorMsg = response.data.messages[0];
                    dispatch(stopSubmit("SignUp",{_error:errorMsg}));
                }
            })
    }
}
export  const logout = ()=>{
    return (dispatch)=>{
        API.logout()
            .then(response=>{
                if(response.data.resultCode===0){
                    dispatch(setAuthUsersData(null, null, null));
                    dispatch(isAuthAC(false));
                }
            })
    }
}
export  const getUserPhotoTC= (id)=>{
    return (dispatch)=>{
      return  API.getProfile(id)
           .then(response=>{
               return response.data.photos
           })
    }
}
export const isAuthAC = (isAuth)=>{
    return{
        type : AUTH,
        isAuth,
    }
}
export const setUserPhotoAC = (photos)=>{
    return{
        type : SET_USER_PHOTO,
        photos,
    }
}