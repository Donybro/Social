function chatReducer(state,action){

   if(action.type==="SEND-MASSAGE"){
      state.currentDialogs.push({id:10,
                                 msgDirection:"from__me",
                                 text:state.currentMassage});
      state.currentMassage="";
   }
   else if(action.type==="ON-CHANGE-SEND-MASSAGE"){

      state.currentMassage=action.massage;
   }

   return state;

}

export default chatReducer;

export const onChangeSendMassageActionCreator=(val)=>{
   return {
     type:"ON-CHANGE-SEND-MASSAGE",
     massage:val
  }
}

export const sendMassageActionCreator=()=>{
  return {
    type:"SEND-MASSAGE",
 }
}