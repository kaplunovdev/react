import React from "react";
import style from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts/MyPosts";

const UserCard = () => {
    return (
        <div className={style.userCard}>

            <div className={style.avatar}>
                <img
                    src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
            </div>
            <div>
                <p>Alexandr Kaplunov</p>
                <p>Date of Birth: 1 february</p>
                <p>City: Taganrog</p>
                <p>Education: Colledge</p>
                <p>Web site: https://github.com/kaplunovdev</p>
            </div>
        </div>
    )
}

const ProfileInfo = (props) => {
    console.log(props.state.posts)
    return (
        <div>
            <div className={style.image_top}>
                <img src="https://www.orangesmile.com/ru/foto/usa/fodder120132.jpg"/>
            </div>
            <UserCard/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

export default ProfileInfo;
