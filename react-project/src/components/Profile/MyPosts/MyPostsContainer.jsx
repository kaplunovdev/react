import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (body) => {
            dispatch(addPostActionCreator(body))
        },
        updateNewPost: (text) => {
            let action = updateNewActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;