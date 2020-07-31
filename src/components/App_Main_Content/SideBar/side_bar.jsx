import React from "react";


import NewMassages from "../SideBar/New_Massages/new_massages";
import AddNewPost from "../SideBar/AddNewPost/add_new_post";

import "./side_bar.css";

function SideBar(props){
   return (
      <div className="sideBar">
         <NewMassages className="newMassages"/>
         <AddNewPost  state={props.state}
                      dispatch={props.dispatch}
                      className="addNewPost"/>
      </div>
   )
}

export default SideBar;