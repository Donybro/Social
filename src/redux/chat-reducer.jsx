const SEND_MESSAGE= "SOCIAL/CHAT/SEND_MESSAGE"
let initialState = {
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
      {id:2,name:"Mark",lastMassage:"222"},
      {id:3,name:"Dima",lastMassage:"311"},
      {id:4,name:"Ali",lastMassage:"41111"},
      {id:5,name:"Lola",lastMassage:"51111"},
      {id:6,name:"Xasan",lastMassage:"611111"},
      {id:7,name:"Temur",lastMassage:"71111"},
      {id:8,name:"Viktor",lastMassage:"811111"},

   ],
}
function chatReducer(state = initialState,action){
      switch (action.type) {
         case SEND_MESSAGE :
            console.log("it is reducer inner",action.type)
             if(action.massageText==="") return 0;
            return {
               ...state,
               currentDialogs: [...state.currentDialogs,{id:9,msgDirection:"from__me",text:action.massageText}]
            }
         default:
            return state;
      }
}

export default chatReducer;



export const sendMassageAC = (massageText)=>{
     return {
        type :  SEND_MESSAGE,
        massageText,
    }
}