import API from "../api/API";
import {useState} from "react";

const FOLLOW = "SOCIAL/USERS/FOLLOW";
const UNFOLLOW = "SOCIAL/USERS/UNFOLLOW";
const SET_USERS = "SOCIAL/USERS/SET_USERS";
const CHANGE_USERS_LIST = "SOCIAL/USERS/CHANGE_USERS_LIST";
const TOTAL_COUNT = "SOCIAL/USERS/TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "SOCIAL/USERS/TOGGLE_IS_FETCHING";
const SET_USERS_LIST = "SOCIAL/USERS/SET_USERS_LIST";
const SET_CHUNK = "SOCIAL/USERS/SET_CHUNK";
const USERS_READY = "SOCIAL/USERS/USERS_READY";

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: null,
    countUsersInOnePage: 6,
    isFetching: false,
    usersListChunkNumber:1,
    isReady:false,
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = state.users.map(u => {
                if (u.id === action.id) {
                    return {
                        ...u,
                        followed: true,
                    }
                }
                return u;
            });
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = state.users.map(u => {

                if (u.id === action.id) {
                    return {
                        ...u,
                        followed: false,
                    }
                }
                return u;

            });
            return stateCopy;
        }
        case  SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }
        case  USERS_READY: {
            return {
                ...state,
                isReady: action.isReady
            }
        }
        case CHANGE_USERS_LIST : {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_CHUNK: {
            return {
                ...state,
                usersListChunkNumber:action.chunkNumber
            }
        }
        default :
            return state;
    }
}

export const followClickAC = (id) => ({
    type: FOLLOW,
    id: id,

})
export const unfollowClickAC = (id) => ({
    type: UNFOLLOW,
    id: id,
})
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
export const usersReadyAC = () => {
    return {
        type: USERS_READY,
        isReady: true
    }
}
export const changeUsersListAC = (pageNumb) => {
    return {
        type: CHANGE_USERS_LIST,
        page: pageNumb,
    }
}
export const setTotalCountAC = (count) => {
    return {
        type: TOTAL_COUNT,
        count: count,
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}
export default usersReducer;

export const getUsersThunkCreator = (countUsersInOnePage, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        return  API.usersAPI(countUsersInOnePage, currentPage)
            .then(data => {
                dispatch(setUsersAC(data.items));
                dispatch(setTotalCountAC(data.totalCount));
                dispatch(usersReadyAC())
            })

    }
}
export const nextUsersListThunkCreator = (usersInOnePage, currentPage) => {
    return (dispatch) => {
        console.log("next")
        dispatch(toggleIsFetching(true));
        dispatch(changeUsersListAC(currentPage));
        API.usersAPI(usersInOnePage, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsersAC(data.items));
            })

    }
}


export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        API.unfollowAPI(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowClickAC(userId));
                }
            })
    }

}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        API.followAPI(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followClickAC(userId));
                }
            })
    }

}

// export const aaa = () => {
//     return (dispatch) => {
//         dispatch(setUsersList());
//
//     }
//
// }


//
// const nextPage = ()=>{
//     setListStart(pagesList[listStart+10])
//     setListEnd(pagesList[listEnd+10])
//     let tempList=[];
//     for (listStart;listStart<=listEnd;listStart++){
//         tempList.push(listStart);
//     }
//     setCurrentList(tempList);
//     console.log(currentList)
// }
// makeChunks(totalUsersCount,countUsersInOnePage){
//
//     console.log(this.chunks);
// }