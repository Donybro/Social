import React from 'react';

import MenuBar from "../App_Main_Content/MenuBar/menu_bar";
import SideBar from "../App_Main_Content/SideBar/side_bar";
import Posts from "../App_Main_Content/Posts/posts";
import { NavLink } from 'react-router-dom';

function AppMainContent(props) {
   return (
         <div className="wrapper_main">
            <div className="App">
               <MenuBar />
               <div className="wrapper">
                  <SideBar state={props.state}
                           dispatch={props.dispatch} />
                  <Posts state={props.state} />
               </div>
            </div>
         </div>
   )
}
export default AppMainContent;