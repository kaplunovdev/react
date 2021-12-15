import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElement = props.posts.map(el =>

        <Post
            post={el.id}
            message={el.message}
            likeCount={el.likeCount}
        />
    )
    const newPostElement = React.createRef();


    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div>
            <div className={style.input}>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            My posts:
            <div className={style.list}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;
