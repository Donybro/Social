import React from "react";

import "../style/CSS/add_new_post.css";


function AddNewPost() {
   return (
      <div className="addNewPost">
         <textarea className="addNewPost__textarea" name="" id="" placeholder="new post..." ></textarea>
         <div className="addNewPost__textarea-addSmile">
            <a href="#"><img src="" alt="" /></a>
         </div>
         <div className="addNewPost__textarea-addPicture">
            <a href="#"><img src="" alt="" /></a>
         </div>
         <div className="addNewPost__addPostBtn">+</div>

      </div>
   )
}

export default AddNewPost;