import { addPostActionCreator } from "../../../../redux/profile-reducer";
import AddNewPost from "./add_new_post";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import React from "react";
import {getNewPostText} from "../../../../selectors/selectors";

const AddNewPostContainer = (props)=>{
    let addPost=(postData)=>{
        props.addPostActionCreator(postData.addPostInput);
    }
    return <AddNewPostReduxForm {...props} onSubmit={addPost}/>
}

let mapStateToProps = (state)=>{
    return {
        newPostText : getNewPostText(state),
    }
}
const AddNewPostReduxForm = reduxForm({form:"AddNewPost"})(AddNewPost);
export  default  compose(
    connect(mapStateToProps,{addPostActionCreator}),
    )(AddNewPostContainer)
