import React from "react";

import "./add_new_post.css";
import { addPostActionCreator, onChangeAddPostActionCreator } from "../../../../redux/profile-reducer";


function AddNewPost(props) {
      let elem = React.createRef();

      function addPost(){
            props.dispatch(addPostActionCreator())
      }
      let onChangeAddPost = function (){       
            props.dispatch(onChangeAddPostActionCreator(elem.current.value));

      }
      console.log(props.state);
      
   return (
      <div className="addNewPost">
         <textarea className="addNewPost__textarea"   
                   ref={elem} 
                   placeholder="new post..."
                   onChange={onChangeAddPost}
                   value={props.state.profilePage.newPostText}
                   />
         <div className="addNewPost__textarea-down-panel">
               <div className="addNewPost__textarea-addSmile">
                     <a href="#"><img src="/images/new_massages_block/addSmile.png" alt="" /></a>
               </div>
               <div className="addNewPost__textarea-addPicture">
                     <a href="#">
                     <input id="add_picture_btn" type="file" accept=".jpg, .jpeg, .png" />
                     <label htmlFor="add_picture_btn"></label>
                     </a>
               </div>
               <div className="addNewPost__addPostBtn" onClick={addPost} >
                     <img src="/images/add_new_post/plus.png" alt=""/>
               </div>
         </div>

      </div>
   )
}

export default AddNewPost;