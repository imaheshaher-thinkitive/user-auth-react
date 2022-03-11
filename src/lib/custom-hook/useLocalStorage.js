import { useEffect, useState } from "react";

function getSavedValue(key,intialValue){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    
    if(intialValue instanceof Function) return intialValue()
    return intialValue
}
export default function useLocalStorage(key,intialValue){
    const [value,setValue] = useState(()=>{
        return getSavedValue(key,intialValue)
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}