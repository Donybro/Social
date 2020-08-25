export  const getPosts = (state)=>{
    return state.profilePage.posts;
}

export  const getProfile = (state)=>{
    return state.profilePage.profile;
}
export  const getStatus = (state)=>{
    return state.profilePage.status
}
export  const getMyId = (state)=>{
    return state.auth.userId
}
export  const getNewPostText = (state)=>{
    return state.profilePage.newPostText
}
export  const getIsAuth = (state)=>{
    return state.auth.isAuth
}
export  const getCurrentDialogs = (state)=>{
    return state.chatPage.currentDialogs
}

export  const getCurrentMassage = (state)=>{
    return state.chatPage.currentMassage
}
export  const getUsersSellector = (state)=>{
    return state.usersPage.users
}
export  const getTotalUsersCount = (state)=>{
    return state.usersPage.totalUsersCount
}

export  const getUsersInOnePage = (state)=>{
    return state.usersPage.usersInOnePage
}
export  const getCurrentPage = (state)=>{
    return state.usersPage.currentPage
}
export  const getIsFetching = (state)=>{
    return state.usersPage.isFetching
}
export  const getInitialized = (state)=>{
    return state.app.initialized
}
