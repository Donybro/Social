import React, {useEffect, useState} from "react";
import "./userItem.css"

import profile_default_photo from "../../../assets/blank-profile-picture-973460_640.png"
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import { paginatorUsersList} from "../../../paginator";



function UserItem(props) {
    useEffect(()=>{
        props.getUsersThunkCreator(props.countUsersInOnePage,props.currentPage);
    },[props.currentPage])


    let [currentList ,setCurrentList] = useState(1);

    let paginatorUsersChunks =  paginatorUsersList(props.totalUsersCount);
    let lastChunk = Object.keys(paginatorUsersChunks).length;

    let changeList = (pageNumber) => {
        props.nextUsersListThunkCreator(props.countUsersInOnePage, pageNumber)
    }

    if(!props.isReady){
        return <Preloader/>
    }
    return (<div>
        <div className="listPage_wrapper">
            <div className="listPage_Lists">{
                paginatorUsersChunks[currentList].map(p => {
                    return (
                        <div key={p} className={props.currentPage === p ? "listPage_button selectedListButton"
                            : "listPage_button"}
                             onClick={() => {
                                 changeList(p)
                             }}> {p}
                        </div>
                    )
                })}</div>
            {props.isFetching ? <Preloader/> : null}
            {props.users.map((u) => {
                return (
                    <div className="userItem" key={u.id}>
                        <NavLink to={`/Profile/${u.id}`} className="linkToProfile">
                            <img className="userItem__photo"
                                 src={(u.photos.small) ? u.photos.small : profile_default_photo}/>
                            <div className="userItem__name">
                                <div className="userItem__name_nickname">{u.name}</div>
                                <div className="userItem__name_status">{u.status}</div>
                            </div>
                        </NavLink>
                        {u.followed ? <button className="userItem__unfollow_btn" onClick={
                                () => {
                                    props.unfollowThunkCreator(u.id)
                                }}>Unfollow</button>
                            : <button className="userItem__follow_btn" onClick={
                                () => {
                                    props.followThunkCreator(u.id)
                                }}>Follow</button>}
                    </div>

                )
            })}
            <button className="listPage_next_button" onClick={(currentList)=>{setCurrentList(prev=>{
                                                                                                    if(prev===lastChunk)return lastChunk;
                                                                                                    return ++prev}) }}>  {'>>'}  </button>
            <button className="listPage_prev_button" onClick={(currentList)=>{setCurrentList(prev=>{if(prev===1){return 1} else return  --prev})}}>{"<<"} </button>
        </div>

    </div>)
}

export default  UserItem;
/*

let RefButton = React.forwardRef((ref,props)=>{
    return <button ref{ref} >
            {props.children}
            </button>
})
let ref = React.createRef();
<RefButton ref={ref}> Click me<RefButton>


    */