import axios from "axios";
import {setCurrentPage} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "dca0bffd-93b4-4f32-8b36-9a7d9a4b6c8c"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },
    unFollowUser(userId = 1, pageSize = 10) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

    },


}






