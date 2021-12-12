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
    return (
        <div>
            <div className={style.input}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            My posts:
            <div className={style.list}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;
