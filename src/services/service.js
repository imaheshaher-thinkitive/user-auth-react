import http from "./http-common"
const loginUser = (data) => {
    return http.post("/api/auth",data)
}


const services ={
    loginUser
}
export default services