import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import store from "../../../redux/state";

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
    props.dispatch({type:'ADD-POST'})
    }

    const onPostChange = () => {
        let text  = newPostElement.current.value
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }
    return (
        <div>
            <div className={style.input}>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}></textarea>
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
