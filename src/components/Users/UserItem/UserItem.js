import React from "react";
import "./userItem.css"
import * as axios from "axios";
import profile_default_photo from "../../../assets/blank-profile-picture-973460_640.png"
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import API from "../../../api/API";
import {nextUsersListThunkCreator} from "../../../redux/users-reducer";


class UserItem extends  React.Component{
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersInOnePage,this.props.currentPage)
    }

    changeList(pageNumber){
        this.props.nextUsersListThunkCreator(this.props.usersInOnePage,pageNumber)
    }
    render(){
        let pages =   Math.ceil(this.props.totalUsersCount / this.props.usersInOnePage);
        let pagesArr=[];
        for(let i=1 ; i<=pages ; i++) { pagesArr.push(i) }
        return (<div>
                    <div className="listPage_wrapper">{
                    pagesArr.map(p=>{
                       return  <div className={this.props.currentPage===p? "listPage_button selectedListButton" : "listPage_button"} onClick={ ()=>{this.changeList(p)}}> {p} </div>
                    })
                }</div>
                        {this.props.isFetching ? <Preloader /> : null}
                    {this.props.users.map( (u)=>{
                        return (
                               <div className="userItem" key={u.id}>
                                   <NavLink to={`/Profile/${u.id}`} className="linkToProfile">
                                   <img className="userItem__photo" src={ (u.photos.small)? u.photos.small : profile_default_photo } />
                                   <div className="userItem__name">
                                       <div className="userItem__name_nickname">{u.name}</div>
                                       <div className="userItem__name_status">{u.status}</div>
                                   </div>
                                   </NavLink>
                                   { u.followed ?  <button className="userItem__unfollow_btn" onClick={
                                                    ()=>{this.props.unfollowThunkCreator(u.id) }}>Unfollow</button>
                                                :  <button  className="userItem__follow_btn" onClick={
                                                   ()=>{ this.props.followThunkCreator(u.id)} }>Follow</button> }
                               </div>

                        )})}
                </div>)

    }
}

export default  UserItem;