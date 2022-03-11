export const  saveLocalStorage = (key,value)=>{
    sessionStorage.setItem(key,JSON.stringify(value))
}

export const getLocalStorage = (key)=>{
    let value= sessionStorage.getItem(key)
    return JSON.parse(value)
}