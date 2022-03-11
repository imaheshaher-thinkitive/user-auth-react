import React, { Component, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { saveLocalStorage } from "../../../lib/custom-hook/helper/localStorage";
import { withRouter } from "../../../lib/custom-hook/helper/withRouter";
import useLocalStorage from "../../../lib/custom-hook/useLocalStorage";
import services from "../../../services/service";
import CustomButton from "../../common-component/CustomButton";
import style from "./LoginComponent.module.css";
import { ToastContainer, toast } from "react-toastify";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      errors: {
        email: "",
        password: "",
        phone_no: "",
      },
    };
  }
  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = this.validEmailRegex.test(value)
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

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  handleOnLogin = async (e) => {
    e.preventDefault();
    let loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    services
      .loginUser(loginData)
      .then((response) => {
        const { data } = response;
        toast(data.message);
        if (data.status === true) {
          saveLocalStorage("token", data.token);
          return <Navigate to={"/"} />;
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
      });
    return <Navigate to={"/"} />;
  };

  render() {
    const { errors } = this.state;
    return (
      <form
        className={`${style.login_form_content}`}
        onSubmit={this.handleOnLogin}
      >
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          {errors.email.length > 0 && (
            <span className={style.errors}>{errors.email}</span>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
            {errors.password.length > 0 && (
            <span className={style.errors}>{errors.password}</span>
          )}
        </div>

        <div className={style.login_button}>
          <CustomButton name={"Login"} isDisable={false} type={"submit"} />
        </div>
      </form>
    );
  }
}

export default LoginForm;
