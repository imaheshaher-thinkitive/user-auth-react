import React from 'react'
import style from "./ProfilePopup.module.css"

function ProfilePopupContainer({userData,isUpdate}) {
  return (
    <div className={` ${style.modal_container}`}>
         <div className={style.profile_name}>
            <h2>Profile Detail</h2>
        </div>
        <div className='row'>
           <div className='col'>
               <p>First Name:</p>
           </div>
           <div className='col'>
               <p>{userData.user && userData.user.firstName}</p>
               {/* <input type="text" value={userData.user.firstName} /> */}
           </div>
        </div>
        <div className='row'>
           <div className='col'>
               <p>Last Name:</p>
           </div>
           <div className='col'>
               <p>{userData.user && userData.user.lastName}</p>
           </div>
        </div>
        <div className='row'>
           <div className='col'>
               <p>Email:</p>
           </div>
           <div className='col'>
            {!isUpdate ? (<p>{userData.user && userData.user.email}</p>) :
               <input type="text" value={userData.user.email} /> }

           </div>
        </div>
        <div className='row'>
           <div className='col'>
               <p>Phone Number:</p>
           </div>
           <div className='col'>
               <p>{userData.user && userData.user.phone}</p>
           </div>
        </div>  <div className='row'>
           <div className='col'>
               <p>Username:</p>
           </div>
           <div className='col'>
               <p>{userData.user && userData.user.username}</p>
           </div>
        </div>  
       
     </div>
  )
}

export default ProfilePopupContainer