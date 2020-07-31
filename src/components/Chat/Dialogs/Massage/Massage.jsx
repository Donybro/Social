import React from "react";

import "./Massage.css";
import { NavLink } from "react-router-dom";


function Massage(props) {
      return(
         props.state.map( (user)=>{
            return(
            <NavLink to={`${user.id}`} >
               <div className="massage__block">
                  <div className="massage__block__user-photo"></div>
                  <div className="massage__block__user-name">{user.name}</div>
                  <div className="massage__block__last-massage">{user.lastMassage}</div>
               </div>
            </NavLink>)
         } )
      )}
export default Massage;