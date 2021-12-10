import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        className={style.post_avatar}
        src="https://cabinet.miem.hse.ru/public-api/user/7/avatar"
        alt=""
      />

      {props.message}
      <div className={style.like}>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
