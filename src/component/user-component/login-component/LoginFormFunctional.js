import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { saveLocalStorage } from '../../../lib/custom-hook/helper/localStorage';
import services from '../../../services/service';
import CustomButton from '../../common-component/CustomButton';
import style from "./LoginComponent.module.css";

function LoginFormFunctional() {
  const navigate = useNavigate()
    const [loginData,setLoginData]=useState({  
        email: "",
    password: "",
    is_login_button_disable:false,
    errors: {
      email: "Enter the email",
      password: "Enter the password",
      isCheck:true

    }
    })


    const checkElement =(name,value) => {
      let errors = loginData.errors;

      switch (name) {
        case "email":
          errors.email =validEmailRegex.test(value)
            ? ""
            : "Email is not valid!";
          break;
        case "password":
          errors.password =
            value.length < 6 ? "Password must be 6 characters long!" : "";
          break;
        default:
          break;
      }
    }
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
    
      checkElement(name,value)
       setLoginData((prevState) =>{
         return {
           ...prevState,[name]:value,is_login_button_disable:true
         }
       })
       if(loginData.errors.email.trim()==="" && loginData.errors.password.trim()===""){
         setLoginData((prevState) => {
           return {
             ...prevState,is_login_button_disable:false
           }
         })
       }
       
      };

     const  handleOnLogin = async (e) => {
        e.preventDefault();
        let data = {
          email:loginData.email,
          password: loginData.password,
        };
        services
          .loginUser(data)
          .then((response) => {
            const { data } = response;
            toast(data.message);
            if (data.status === true) {
              saveLocalStorage("token", data.token);
              navigate("/")
            }
          })
          .catch((e) => {
            console.log(e);
            alert("Something went wrong");
          });
       
      };
  
  return (
    <form
        className={`${style.login_form_content}`}
        onSubmit={handleOnLogin}
      >
        <div>
          <label>Email</label>
          <input
            type="text"
            value={loginData.email}
            name="email"
            onChange={handleChange}
          />
          {loginData.errors.email.length > 0 && (
            <span className={style.errors}>{loginData.errors.email}</span>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={loginData.password}
            name="password"
            onChange={handleChange}
          />
            {loginData.errors.password.length > 0 && (
            <span className={style.errors}>{loginData.errors.password}</span>
          )}
        </div>

        <div className={style.login_button}>
          <CustomButton name={"Login"} isDisable={loginData.is_login_button_disable} type={"submit"} />
        </div>
        <div className={style.signup_link}>
          <Link to={"/signup"}>SignUp</Link>

        </div>

      </form>

  )
}

export default LoginFormFunctional