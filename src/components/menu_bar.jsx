import React from "react";
import "../style/CSS/menu_bar.css";




function MenuBar() {
   return (
      <div className="menu_bar">
         <div className="menu_bar_logo">
            {/* <img src="/images/menu_bar/social1.png" alt="" /> */}
            <div><p>SOCIAL</p></div>
         </div>
         <div className="menu_bar_friends">
            <a href="#">
               <img src="/images/menu_bar/VectorFriends.png" alt="" />
            </a>
         </div>
         <div className="menu_bar_peoples">
            <a href="#">
               <img src="/images/menu_bar/Vector-7.png" alt="" />
            </a>
         </div>
         <div className="menu_bar_chat">
            <a href="#">
               <img src="/images/menu_bar/Vector-5.png" alt="" />
            </a>
         </div>
         <div className="menu_bar_profile">
            <a href="#">
               <img src="/images/menu_bar/Vector-6.png" alt="" />
            </a>
         </div>
         <div className="menu_bar_search">
            <input className="menu_bar_search_input" type="text" placeholder="search..."/>
            <div><img src="/images/menu_bar/Vector-8.png" alt=""/></div>
           
         </div>
         <div className="menu_bar_logout">Log out</div>

      </div>
   )
}

export default MenuBar;