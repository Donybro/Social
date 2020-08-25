import React from "react";
import "../MenuBar/menu_bar.css";
import { NavLink } from "react-router-dom";
import AuthContainer from "./Auth/AuthContainer";

import friends_icon from "../../../assets/menu_bar/VectorFriends.png";
import users_icon from "../../../assets/menu_bar/Vector-7.png";
import chat_icon from "../../../assets/menu_bar/Vector-5.png";
import profile_icon from "../../../assets/menu_bar/Vector-6.png";
import search_icon from "../../../assets/menu_bar/Vector-8.png";


function MenuBar() {
   return (
      <div className="menu_bar">
         <div className="menu_bar_logo">
            <div><NavLink to="/Main" >SOCIAL</NavLink></div>
         </div>
         <div className="menu_bar_friends">
               <img src={friends_icon} alt="" />
         </div>
           <NavLink to="/Users" activeClassName="activeMenuIcon" className="menu_bar_peoples" >
               <img src={users_icon} alt=""/>
           </NavLink>
         <NavLink to="/Chat" activeClassName="activeMenuIcon" className="menu_bar_chat">
               <img src={chat_icon} alt="" />
         </NavLink>
         <NavLink to="/Profile" className="menu_bar_profile" activeClassName="activeMenuIcon">
               <img src={profile_icon} alt="" />
         </NavLink>
         <div className="menu_bar_search">
            <input className="menu_bar_search_input" type="text" placeholder="search..."/>
            <div><img src={search_icon} alt=""/></div>
           
         </div>
          <AuthContainer />


      </div>
   )
}

export default MenuBar;