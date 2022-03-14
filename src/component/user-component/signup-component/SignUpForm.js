import React, { useState } from 'react'
import style from "./SignUpForm.module.css"
import { useForm } from 'react-hook-form';
import services from '../../../services/service';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
    const navigate  = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (userData) => {
          services.signUpUser(userData).then((response) =>{
              let {data} = response
             
              if(data.status){
               
                  toast(data.message)
                  navigate("/login")
              }
              else {
                  
                  toast(data.message    )
              }
          }).catch((err) =>{
              toast("Something went wrong", err)
          })
      }
//     const [signUpData,setSignUpData] = useState({
//         username:"",
//         email:"",
//         password:"",
//         errors:{
//             email:"",
//             password:"",
//             username:""
//         }
//   })

    //   const errorHandle = (fieldName,validationObject) => {
    //     return register(fieldName,validationObject)
    //   }

  return (
    
            <form className={style.signup_form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={style.signup_lable}>Sign Up</h3>
               
                <div className={`form-group ${style.singup_form_group}`}>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    {...register("email",{required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                {errors.email && <p>Please check the Email</p>}
                </div>
                <div className={`form-group ${style.singup_form_group}`}>
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" 
                    {...register("username",{required: true})}/>
                {errors.username && <p>Please check the Username</p>}
                </div>

                <div className={`form-group ${style.singup_form_group}`}>
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter phone number" 
                    {...register("phone",{required: true,minLength:10,maxLength:10, validate:value=>/\d{10}/.test(value)})}/>
                {errors.phone && <p>Please check the Phone Number</p>}
                </div>

                <div className={`form-group ${style.singup_form_group}`}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    
                    {...register("password",{required:true,minLength:6})}
                    />
                {errors.password && <p>Please check the Password</p>}

                </div>
              <div className={style.signup_button}>
              <button type="submit" className={"btn btn-primary btn-block"}>Sign Up</button>
              </div>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/login"}>sign in?</Link>
                </p>
            </form>
  )
}

export default SignUpForm