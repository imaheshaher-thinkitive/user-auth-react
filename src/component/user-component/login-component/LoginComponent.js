import React from "react";
import style from "./LoginComponent.module.css";
import LoginForm from "./LoginForm";
import LoginFormFunctional from "./LoginFormFunctional";
function LoginComponent() {
  return (
    <div className={`${style.login_card}`}>
      <div className={`${style.login_form_title_div}`}>
      <label className={style.login_form_title}>Login</label>
      </div>
      <div className={`${style.login_form}`}>
          {/* <LoginForm /> */}
          <LoginFormFunctional />
      </div>
    </div>
  );
}

export default LoginComponent;
