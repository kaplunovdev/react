import axios from "axios";

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
        return instance.post(`follow/${userId}`)

    },
    unFollowUser(userId = 1, pageSize = 10) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId) {
        console.warn('Obsolute method/ Please profileAPI object')
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);

    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false) {
        return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logout(email,password,rememberMe=false) {
        return instance.delete(`auth/login`);
    },



}






