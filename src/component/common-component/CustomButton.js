import React from 'react'
import style from "./CustomButton.module.css"
function CustomButton(props) {
  return (
   <button className={style.custom_button} type={props.type} disabled={props.isDisable}>{props.name}</button>
  )
}

export default CustomButton