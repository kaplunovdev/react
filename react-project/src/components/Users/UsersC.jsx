import React from "react";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get users</button>
                {this.props.users.map(user =>
                    <div className={style.user} key={user.id}>
                        <div className={style.follow}>
                            <div className={style.avatar}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                            </div>
                            <div>
                                {user.following ?
                                    <button onClick={() => {
                                        this.props.unFollow(user.id)
                                    }}>unFollow</button> :
                                    <button onClick={() => {
                                        this.props.follow(user.id)
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
}

export default Users;