import http from "./http-common"
const loginUser = (data) => {
    return http.post("/api/login",data)
}

const signUpUser = (data) => {
    return http.post("/api/signup",data)
}

const profileDetail = (headers) =>{
    return http.get("/api/profile",{headers})
}

// update image
const updateProfileImage = (data,headers) => {
    return http.patch("/api/profile/update/image",data,{headers})
}
const services ={
    loginUser,
    signUpUser,
    profileDetail,
    updateProfileImage  
}
export default services