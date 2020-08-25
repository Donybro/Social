import React from "react";

import NewMassages from "../SideBar/New_Massages/new_massages";

import "./side_bar.css";
import AddNewPostReduxContainer from "./AddNewPost/addNewPostContainer";


function SideBar(props){
   return (
      <div className="sideBar">
          <NewMassages className="newMassages"/>
          <AddNewPostReduxContainer />
      </div>
   )
}

export default SideBar;