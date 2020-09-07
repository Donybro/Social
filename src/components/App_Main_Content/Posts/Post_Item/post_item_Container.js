import PostItem from "./post_item";
import {connect} from "react-redux";
import {getPosts, getProfile} from "../../../../selectors/selectors";

let mapStateToProps = (state)=>{
    return {
        posts : getPosts(state),
        userProfile : getProfile(state),
    }
}


let PostItemContainer = connect(mapStateToProps,null)(PostItem)
export  default  PostItemContainer