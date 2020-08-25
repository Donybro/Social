import {createStore, combineReducers, applyMiddleware} from "redux";

import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
   profilePage : profileReducer,
   chatPage    : chatReducer,
   usersPage   : usersReducer,
   auth : authReducer,
   app: appReducer,
   form : formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;


export default store;