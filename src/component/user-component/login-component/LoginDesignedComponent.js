import React from "react";
import style from "./LoginDesignedComponent.module.scss";
function LoginDesignedComponent() {
  return (
    <div className={style.login_card_container}>
      <div className={style.login_card}>
        <h2 className={style.login_header}>Login</h2>
        <div className={style.login_form}>
          <div>
            <label className={style.input_lable}>Email:</label>
            <input type="text" className={style.form__field} />
          </div>
          <div>
            <label className={style.input_lable}>Password:</label>
            <input type="text" className={style.form__field} />
          </div>
          <div className={style.btn_parent}>
            <button className={`btn btn-primary ${style.login_button}`}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginDesignedComponent;
