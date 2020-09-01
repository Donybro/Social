    import {connect} from "react-redux";
    import UserItem from "./UserItem";
    import {
    followThunkCreator,
    getUsersThunkCreator,
        makeChunksTC,
    nextUsersListThunkCreator,
    unfollowThunkCreator
} from "../../../redux/users-reducer";
    import withAuthRedirect from "../../../hoc/withAuthRedirect";
    import {compose} from "redux";
    import {
    getCurrentPage,
    getIsFetching,
    getTotalUsersCount,
    getUsersInOnePage, getUsersListChunkNumber,
    getUsersSellector
} from "../../../selectors/selectors";

    let mapStateToProps=(state)=>{
        return{
            users : getUsersSellector(state),
            totalUsersCount :getTotalUsersCount(state),
            countUsersInOnePage: getUsersInOnePage(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            usersListChunkNumber:getUsersListChunkNumber(state),
            isReady:state.usersPage.isReady
        }
    }

export  default  compose(
    connect(mapStateToProps,{getUsersThunkCreator,nextUsersListThunkCreator,unfollowThunkCreator,followThunkCreator}),
    withAuthRedirect)(UserItem);