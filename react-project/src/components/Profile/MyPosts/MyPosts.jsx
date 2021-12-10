import React from "react";
import style from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      My posts
      <textarea></textarea>
      <button>Add post</button>
      <div className={style.posts}>
        <div className={style.item}>
          <img
            className={style.post_avatar}
            src="https://cabinet.miem.hse.ru/public-api/user/7/avatar"
            alt=""
          />
        </div>
        <div className={style.item}>post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;
