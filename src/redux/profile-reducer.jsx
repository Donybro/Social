function profileReducer(state,action){

   if(action.type==="ADD-POST"){
      let newPost = {
         id:"5",  
         massage: state.newPostText
      }
      if(newPost.massage===""){
         return 0;
      }
      state.posts.push(newPost);
      state.newPostText="";
   } 
   else if(action.type==="ON-CHANGE-ADD-POST"){
      state.newPostText=action.massage;
   }

   return state;

}

export default profileReducer;

export const addPostActionCreator = ()=>{
   return {
       type: "ADD-POST",
    }
 };
 export const onChangeAddPostActionCreator = (msg)=>{
    return {
        type : "ON-CHANGE-ADD-POST",
        massage : msg,   
     }
  };