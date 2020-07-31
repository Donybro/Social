import React from "react";
import "./post_item.css";


function PostItem(props) {
   return (
      props.state.profilePage.posts.map(el => {
         return (
            <div className="post__item" >
               <div className="post__item-user">
                  <div className="user_photo"></div>
                  <div className="user_name">Aisha</div>
               </div>
               <div className="post__item-photo"></div>
               <div className="post__item__text">
                  <p>{el.massage}</p>
               </div>
               <div className="post__item-panel">
                  <div className="panel_data">
                     <img src="\images\posts\ant-design_clock-circle-outlined.png" alt="" /><p>12:22</p>
                  </div>
                  <div className="panel_likes-amount">100 people like this</div>
                  <div className="panel_like-button"> <img src="\images\posts\like.png" alt="" /> </div>
                  <div className="panel_comments-button"> <img src="\images\posts\comment.png" alt="" /> </div>
               </div>
            </div>)
      })
   )
}
export default PostItem;