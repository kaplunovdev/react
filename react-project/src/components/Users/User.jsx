import React from "react";
import userPhoto from '../../assets/images/avatar.png'
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let User = ({user,followingInProgress,unFollow,follow,toggleFollowingProgress}) => {

    return (
        <div className={style.user}>


                <div className={style.follow}>
                    <div className={style.avatar}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='Loading'/>
                        </NavLink>
                    </div>
                    <div>
                        {user.following
                            ?
                            <button disabled={followingInProgress} onClick={() => {
                                toggleFollowingProgress(true, user.id)
                                usersAPI.unFollowUser(user.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            unFollow(user.id)
                                        }
                                        toggleFollowingProgress(false, user.id)

                                    })

                            }}>unFollow</button>
                            :

                            <button disabled={followingInProgress} onClick={() => {
                                toggleFollowingProgress(true, user.id)
                                usersAPI.followUser(user.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            follow(user.id)
                                        }
                                        toggleFollowingProgress(false, user.id)

                                    })


                            }}>Follow</button>
                        }

                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {"user.status"}
                        </div>
                    </div>
                    <div className={style.country}>
                        <div>
                            {"user.location.country"}
                        </div>
                        <div>
                            {"user.location.city"}
                        </div>
                    </div>
                </div>


            <div className={style.showMore}>
                <button>Show more</button>
            </div>
        </div>
    )

}

export default User;