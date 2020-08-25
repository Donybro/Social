import {getAuthMeThunkCreator} from "./auth-reducer";


const  INITIALIZE = "SOCIAL/APP/INITIALIZE";


let initialState = {
    initialized:false,
}

const appReducer = (state = initialState,action)=>{
    switch (action.type) {
        case INITIALIZE:
            return   {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export default appReducer;


export  const initializeApp= ()=>{
    return (dispatch)=>{
       let authMePromise =  dispatch(getAuthMeThunkCreator());
       Promise.all([authMePromise])
           .then(()=>{
               dispatch(initializeSuccess())
           })
    }
}

export const initializeSuccess = ()=>{
    return{
        type : INITIALIZE,
    }
}