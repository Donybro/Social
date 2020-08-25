import React from "react";

import "./add_new_post.css";
import {Field} from "redux-form";


function AddNewPost(props) {
   return (
      <div className="addNewPost">
          <form onSubmit={props.handleSubmit}>
         <Field    className="addNewPost__textarea"
                   placeholder="new post..."
                   component={"input"}
                   name={"addPostInput"}
                   />
         <div className="addNewPost__textarea-down-panel">
               <div className="addNewPost__textarea-addSmile">
                     <a href="#"><img src="/images/new_massages_block/addSmile.png" alt="" /></a>
               </div>
               <div className="addNewPost__textarea-addPicture">
                     <a>
                     <input id="add_picture_btn" type="file" accept=".jpg, .jpeg, .png" />
                     <label htmlFor="add_picture_btn"></label>
                     </a>
               </div>
               <button className="addNewPost__addPostBtn" >
                     <img src="/images/add_new_post/plus.png" alt=""/>
               </button>
         </div>
          </form>
      </div>
   )
}

export default AddNewPost;