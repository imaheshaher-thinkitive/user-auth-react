import React from 'react'
import LoginComponent from '../../component/user-component/login-component/LoginComponent'
import LoginDesignedComponent from '../../component/user-component/login-component/LoginDesignedComponent'
import style from "./LoginPage.module.css"
function LoginPage() {
  return (
    <div className={`${style.login_container} ${style.bg_image}`}>
      
         {/* <LoginComponent /> */}
         
         <LoginDesignedComponent />
    </div>
  )
}

export default LoginPage