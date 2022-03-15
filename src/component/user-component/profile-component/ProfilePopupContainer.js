import React, { useEffect, useState } from "react";
import style from "./ProfilePopup.module.css";

function ProfilePopupContainer({ userData }) {
  return (
    <div className={` ${style.modal_container}`}>
      <div className={style.profile_name}>
        <h2>Profile Detail</h2>
      </div>
      <div className="row">
        <div className="col">
          <p>First Name:</p>
        </div>
        <div className="col">
          <p>{userData.user && userData.user.firstName}</p>
          {/* <input type="text" value={userData.user.firstName} /> */}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Last Name:</p>
        </div>
        <div className="col">
          <p>{userData.user && userData.user.lastName}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Email:</p>
        </div>
        <div className="col">
          <p>{userData.user && userData.user.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Phone Number:</p>
        </div>
        <div className="col">
          <p>{userData.user && userData.user.phone}</p>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col">
          <p>Username:</p>
        </div>
        <div className="col">
          <p>{userData.user && userData.user.username}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{"Profile Image"}:</p>
        </div>
        <div className="col">
          {userData.user && userData.user.profile && userData.user.profile.avatar ? 
            <img src={`http://localhost:8000/${userData.user.profile.avatar}`} height={"100"}/> : null  
        }
        </div>
      </div>
    </div>
  );
}

export default ProfilePopupContainer;
