import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()
    const handleOnLogout =() => {
        sessionStorage.removeItem('token')
        navigate("/login")
    }
  return (
    <div>
        HomePage
        <button onClick={handleOnLogout}>Log out</button>
    </div>
  )
}

export default HomePage