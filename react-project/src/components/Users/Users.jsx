import React from "react";
import userPhoto from '../../assets/images/avatar.png'
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

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
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.following
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                        withCredentials:true,
                                        headers:{"API-KEY":"e45fa826-db68-40bd-94b2-fd6c00892c88"}
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0){
                                                props.unFollow(user.id)
                                            }

                                        })

                                }}>unFollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{
                                        withCredentials:true,
                                        headers:{"API-KEY":"e45fa826-db68-40bd-94b2-fd6c00892c88"}
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0){
                                                debugger
                                                props.follow(user.id)
                                            }

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