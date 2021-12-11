import React from "react";
import style from "./MyPosts.module.css";
import {postsElement} from "../../../index";

const MyPosts = () => {
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
