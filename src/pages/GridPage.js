import React from "react";
import "./GridPage.css";
function GridPage() {
  return (
    // <div className="grid-container">
    //     <div className='grid-item grid-item-1'>
    //         Grid 1
    //     </div>
    //     <div className='grid-item grid-item-2'>
    //     Grid 2
    //     </div>
    //     <div className='grid-item grid-item-3'>
    //     Grid 3
    //     </div>
    // </div>

    // <div>
    //     <div className='box-one'>
    //     One
    //     </div>
    //     <div className='box-two'>
    //         Two
    //     </div>

    //     <div className='parent'>
    //         Parent
    //         <div cla ssName='child-1'>
    //             One
    //         </div>
    //         <div className='child-2'>
    //             Two
    //         </div>
    //         <div className='child-3'>
    //             Three
    //         </div>
    //     </div>
    // </div>
    // <div className="flex-container">
    //   <div className="flex-1 flexbox-item"></div>
    //   <div className="flex-2 flexbox-item"></div>{" "}
    //   <div className="flex-3 flexbox-item"></div>
    // </div>
    <div className="center">
      <h2>Login</h2>
      <form>
        <div className="txt_field">
          <input type="text" />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" />
          <label>Password </label>
        </div>
        <div className="pass">Forgot password?</div>
        <input type="submit" value="login" />
        <div className="signup_link">
            Not a Member? <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
}

export default GridPage;
