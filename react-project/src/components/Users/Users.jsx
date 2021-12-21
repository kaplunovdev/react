import React from "react";
import userPhoto from '../../assets/images/avatar.png'
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(pages)
    return (
        <div>
            <div className={style.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {props.users.map(user =>

                <div className={style.user} key={user.id}>
                    <div className={style.follow}>
                        <div className={style.avatar}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='Loading'/>
                            </NavLink>
                        </div>
                        <div>
                            {user.following
                                ?
                                <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    usersAPI.unFollowUser(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)

                                        })

                                }}>unFollow</button>
                                :

                                <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    usersAPI.followUser(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)

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
                </div>
            )}
            <div className={style.showMore}>
                <button>Show more</button>
            </div>
        </div>
    )

}

export default Users;