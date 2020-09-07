import React from "react";
import "./post_item.css";
import clock  from "../../../../assets/posts/ant-design_clock-circle-outlined.png";
import like  from "../../../../assets/posts/like.png";
import comment  from "../../../../assets/posts/comment.png";

function PostItem(props) {
    console.log(props.userProfile)
   return (
      props.posts.map(el => {
         return (
            <div className="post__item" key={el.id}>
               <div className="post__item-user">
                   {Object.keys(props.userProfile).length>0 ? <img className="user_photo" src={props.userProfile.photos.small}/> :null}
                  <div className="user_name">{props.userProfile.fullName}</div>
               </div>
               <div className="post__item-photo"></div>
               <div className="post__item__text">
                  <p>{el.massage}</p>
               </div>
               <div className="post__item-panel">
                  <div className="panel_data">
                     <img src={clock} alt="" /><p>{el.time.toLocaleDateString()}</p>
                  </div>
                  <div className="panel_likes-amount">100 people like this</div>
                  <div className="panel_like-button"> <img src={like} alt="" /> </div>
                  <div className="panel_comments-button"> <img src={comment} alt="" /> </div>
               </div>
            </div>)
      })
   )
}
export default PostItem;