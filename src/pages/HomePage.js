import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";
function HomePage() {
  const navigate = useNavigate();
  const handleOnLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={`${style.home_page} container`}>
      <div></div>
      <div className={`${style.home_page_header}`}>
        <h3 className={style.home_page_name}>HomePage</h3>
      </div>
        <div> 
          <button className={`btn btn-danger mt-0`} onClick={handleOnLogout}>
            Log out
          </button>
        </div>
      </div>
   
  );
}

export default HomePage;
