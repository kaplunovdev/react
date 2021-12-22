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
        addNewPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;