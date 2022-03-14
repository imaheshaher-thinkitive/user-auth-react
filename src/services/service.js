import http from "./http-common"
const loginUser = (data) => {
    return http.post("/api/login",data)
}

const signUpUser = (data) => {
    return http.post("/api/signup",data)
}

const services ={
    loginUser,
    signUpUser
}
export default services