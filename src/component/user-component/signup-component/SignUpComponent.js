import React from 'react'
import SignUpForm from './SignUpForm'
import style from "./SignUpComponent.module.css"
export default function SignUpComponent() {
  return (
  <div className={` card ${style.signup_card}`}>
    <SignUpForm />
  </div>
  )
}
