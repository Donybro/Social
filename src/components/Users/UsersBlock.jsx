import React from "react";
import  "./usersBlock.css"
import UserItemContainer from "./UserItem/UserItemContainer";
function Users() {
    return(
        <div className="wrapper_users">
            <div className="usersBLock">
                <UserItemContainer/>
            </div>
        </div>
    )
}

export default  Users;


