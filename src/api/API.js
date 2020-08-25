import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers:{"api-key":"41e31a1d-79b3-4984-84c4-910630304dbe"}
});

let API ={
    usersAPI (usersInOnePage,currentPage){
        return instance.get(`users?count=${usersInOnePage}&page=${currentPage}`)
            .then(response=>{
                return response.data
            })
    },
    unfollowAPI(userId){
        return  instance.delete(`follow/${userId}`)
    },
    followAPI(userId){
       return  instance.post(`follow/${userId}`,{},)
    },
    getProfile(userId){
        return  instance.get(`profile/${userId}`)

    },
    getAuthMe(){
        return instance.get('auth/me');
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, { status} )
    },
    login(email,password,rememberMe){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}
export  default API;