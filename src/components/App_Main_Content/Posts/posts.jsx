import React from "react";
import "./posts.css";

import PostItem from "./Post_Item/post_item";

function Posts (props){
   return(
      <div className="posts">
         <PostItem state={props.state} />
   </div>
   )
}

export default Posts;