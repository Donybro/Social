import React from "react";
import "./posts.css";

import PostItemContainer from "./Post_Item/post_item_Container";

function Posts (props){
   return(
      <div className="posts">
         <PostItemContainer />
   </div>
   )
}

export default Posts;