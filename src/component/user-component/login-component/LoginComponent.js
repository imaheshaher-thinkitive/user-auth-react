import React from "react";
import style from "./LoginComponent.module.css";
import LoginForm from "./LoginForm";
function LoginComponent() {
  return (
    <div className={`${style.login_card}`}>
      <label className={style.login_form_title}>Login</label>
      <div className={`${style.login_form}`}>
          <LoginForm />
      </div>
    </div>
  );
}

export default LoginComponent;
