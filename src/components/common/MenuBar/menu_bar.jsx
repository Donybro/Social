import React from "react";
import "../MenuBar/menu_bar.css";
import { NavLink } from "react-router-dom";
import AuthContainer from "./Auth/AuthContainer";

function MenuBar() {
   return (
      <div className="menu_bar">
         <div className="menu_bar_logo">
            <div><NavLink to="/Main" >SOCIAL</NavLink></div>
         </div>
         <div className="menu_bar_friends">
               <img src="../../../../build/images/menu_bar/VectorFriends.png" alt="" />
         </div>
           <NavLink to="/Users" activeClassName="activeMenuIcon" className="menu_bar_peoples" >
               <img src="../../../../build/images/menu_bar/Vector-7.png" alt=""/>
           </NavLink>
         <NavLink to="/Chat" activeClassName="activeMenuIcon" className="menu_bar_chat">
               <img src="../../../../build/images/menu_bar/Vector-5.png" alt="" />
         </NavLink>
         <NavLink to="/Profile" className="menu_bar_profile" activeClassName="activeMenuIcon">
               <img src="../../../../build/images/menu_bar/Vector-6.png" alt="" />
         </NavLink>
         <div className="menu_bar_search">
            <input className="menu_bar_search_input" type="text" placeholder="search..."/>
            <div><img src="../../../../build/images/menu_bar/Vector-8.png" alt=""/></div>
           
         </div>
          <AuthContainer />


      </div>
   )
}

export default MenuBar;