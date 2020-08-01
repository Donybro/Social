import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";

let store= {
   _state:{
      chatPage:{
         currentDialogs:[
            {id:1,msgDirection:"from__me",text:"11111"},
            {id:2,msgDirection:"to__me",  text:"222"},
            {id:3,msgDirection:"from__me",text:"311"},
            {id:4,msgDirection:"to__me",  text:"41111"},
            {id:5,msgDirection:"from__me",text:"51111"},
            {id:6,msgDirection:"to__me",  text:"611111"},
            {id:7,msgDirection:"from__me",text:"71111"},
            {id:8,msgDirection:"to__me",  text:"811111"},
            {id:9,msgDirection:"from__me",text:"311"},
            {id:10,msgDirection:"to__me",  text:"41111"},
            {id:5,msgDirection:"from__me",text:"51111"},
            {id:6,msgDirection:"to__me",  text:"611111"},
            {id:7,msgDirection:"from__me",text:"71111"},
            {id:8,msgDirection:"to__me",  text:"811111"},
   ],
         dialogsBlock:[
            {id:1,name:"Aisha",lastMassage:"11111"},
            {id:2,name:"Mark",lastMassage:"222"},
            {id:3,name:"Dima",lastMassage:"311"},
            {id:4,name:"Ali",lastMassage:"41111"},
            {id:5,name:"Lola",lastMassage:"51111"},
            {id:6,name:"Xasan",lastMassage:"611111"},
            {id:7,name:"Temur",lastMassage:"71111"},
            {id:8,name:"Viktor",lastMassage:"811111"},
   
         ],
         currentMassage:""
      },
      profilePage:{
         posts:[ {id:1,massage:"HELLO"},
                 {id:2,massage:"HI"}, 
                 {id:3,massage:"dsdsds"},
                 {id:4,massage:"dsdsd"},
                 {id:5,massage:"sd222sd"},
                 {id:6,massage:"2323"},
                 {id:7,massage:"dsdsdsdqq211"},
      ],
         newPostText:"",
      }
   
   }, 
   getState(){
      return this._state;
   },
   rerenderEntireTree : function(){},
   
   subscriber(observer){
      this.rerenderEntireTree = observer;
   }, 
   dispatch(action){

      this._state.profilePage = profileReducer(this._state.profilePage,action);
      this._state.chatPage    = chatReducer(this._state.chatPage,action);
      
      this.rerenderEntireTree(this._state);
   }


}
window.store = store;

export default store;


 
 

/*
   addPost(){
         
   },
   onChangeAddPost(val){
     
   },

*/ 