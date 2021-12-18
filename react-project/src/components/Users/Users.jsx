import React from "react";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={style.pagination}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && style.selectedPage}
                                     onClick={() => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>
                    })}

                </div>
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