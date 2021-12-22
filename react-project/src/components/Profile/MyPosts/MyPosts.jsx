import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {


    let postsElement = props.posts.map(el =>

        <Post
            post={el.id}
            message={el.message}
            likeCount={el.likeCount}
            key={el.id}
        />
    )


    const addPost = (values) => {
        props.addNewPost(values.newPost)
    }

    return (
        <div>
            <div className={style.input}>
                <MyPostsFormRedux onSubmit={addPost}/>
            </div>
            My posts:
            <div className={style.list}>
                {postsElement}
            </div>
        </div>
    );
};
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPost" placeholder="Enter new post..."/>
            <button>Add post</button>
        </form>
    )
}
const MyPostsFormRedux = reduxForm({form: 'myPostsForm'})(MyPostsForm)
export default MyPosts;
