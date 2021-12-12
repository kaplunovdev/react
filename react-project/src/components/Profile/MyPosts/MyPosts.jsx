import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

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
        let text  = newPostElement.current.value
        alert(text)
    }
    return (
        <div>
            <div className={style.input}>
                <textarea ref={newPostElement}></textarea>
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
