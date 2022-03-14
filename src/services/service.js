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

const services ={
    loginUser,
    signUpUser,
    profileDetail   
}
export default services