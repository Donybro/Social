    import {connect} from "react-redux";
    import UserItem from "./UserItem";
    import {followThunkCreator, getUsersThunkCreator, nextUsersListThunkCreator, unfollowThunkCreator} from "../../../redux/users-reducer";
    import withAuthRedirect from "../../../hoc/withAuthRedirect";
    import {compose} from "redux";
    import {
    getCurrentPage,
    getIsFetching,
    getTotalUsersCount,
    getUsersInOnePage,
        getUsersSellector
    } from "../../../selectors/selectors";

    let mapStateToProps=(state)=>{
        return{
            users : getUsersSellector(state),
            totalUsersCount :getTotalUsersCount(state),
            usersInOnePage: getUsersInOnePage(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state)
        }
    }

export  default  compose(
    connect(mapStateToProps,{getUsersThunkCreator,nextUsersListThunkCreator,unfollowThunkCreator,followThunkCreator}),
    withAuthRedirect)(UserItem);