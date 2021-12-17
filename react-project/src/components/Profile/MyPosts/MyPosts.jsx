import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    console.log(props.newPostText)

    let postsElement = props.posts.map(el =>

        <Post
            post={el.id}
            message={el.message}
            likeCount={el.likeCount}
            key={el.id}
        />
    )


    const addPost = () => {
        props.addNewPost()
    }

    const onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPost(text);
    }
    return (
        <div>
            <div className={style.input}>
                <textarea  onChange={onPostChange}
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
