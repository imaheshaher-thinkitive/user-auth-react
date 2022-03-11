import React from 'react'
import LoginComponent from '../../component/user-component/login-component/LoginComponent'
import style from "./LoginPage.module.css"
function LoginPage() {
  return (
    <div className={`${style.login_container} ${style.bg_image}`}>
      
        <LoginComponent />
    </div>
  )
}

export default LoginPage