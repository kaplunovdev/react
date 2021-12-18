import React from "react";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);