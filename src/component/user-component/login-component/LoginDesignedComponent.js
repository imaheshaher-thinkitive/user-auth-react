import React from "react";
import style from "./LoginDesignedComponent.module.scss";
import { useForm } from "react-hook-form";
import services from "../../../services/service";
import { useNavigate } from "react-router-dom";
import { saveLocalStorage } from "../../../lib/custom-hook/helper/localStorage";
import { toast } from "react-toastify";

function LoginDesignedComponent() {
  const navigate = useNavigate()
  const CssStyle = {
    borderRadius: "24px",
    paddingInline: "30px",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    services
    .loginUser(data)
    .then((response) => {
      const { data } = response;
      toast(data.message);
      if (data.status === true) {
        saveLocalStorage("token", data.token);
        navigate("/");
      }
    })
    .catch((e) => {
      console.log(e);
      alert("Something went wrong");
    });
  }
  return (
    <div className={style.login_card_container}>
      <div className={style.login_card}>
        <h2 className={style.login_header}>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.login_form}>
            <div>
              <label className={style.input_lable}>Email:</label>
              <input type="email" className={style.form__field} name="email"
                {...register("email",{required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
              />
              {errors.email && <p>Please check the email</p>}
            </div>
            <div>
              <label className={style.input_lable}>Password:</label>
              <input type="text" className={style.form__field}
                {...register("password",{required:true,minLength:6})}

              />
              <p>Password should be minimum 6 characters</p>
              {errors.password && <p>Check the password</p>}
            </div>
          </div>
          <div>
            <div className={style.btn_parent}>
              <div>
                <input type="checkbox" /> &nbsp;
                <label className={style.remember_lable}>Remember me</label>
              </div>
              <button
                style={CssStyle}
                className={`btn btn-primary ${style.btn}`}
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginDesignedComponent;
