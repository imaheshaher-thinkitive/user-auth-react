import { getLocalStorage } from "./localStorage";

const loadProfile = () => {
    const token = getLocalStorage("token")
    const headers = {
        Authorization:`bearer ${token}`
    }
    return headers
}
export default loadProfile;