import React from "react";
import "../style/CSS/menu_bar.css";

import NewMassages from "./new_massages";
import AddNewPost from "./add_new_post";

import "../style/CSS/side_bar.css";

function SideBar(){
   return (
      <div className="sideBar">
         <NewMassages className="newMassages"/>
         <AddNewPost  className="addNewPost"/>
      </div>
   )
}

export default SideBar;