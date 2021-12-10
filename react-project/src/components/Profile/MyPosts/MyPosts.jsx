import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={style.input}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      My posts:
      <div className={style.list}>
        <Post message="Hi, how are you?" />
        <Post message="First post" />
      </div>
    </div>
  );
};

export default MyPosts;
