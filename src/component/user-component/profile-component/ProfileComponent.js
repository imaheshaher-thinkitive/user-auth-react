import React from 'react'
import { getLocalStorage } from '../../../lib/custom-hook/helper/localStorage';
import services from '../../../services/service';


import ProfilePopup from './ProfilePopup';
function ProfileComponent() {
    const token = getLocalStorage("token")
    const headers = {
        Authorization: `${token}`
    }
    console.log("Profile component")
    services.profileDetail(headers).then((response ) => {
        console.log(response.data)
    })
  return (
    <div>
        <ProfilePopup />
    </div>
  )
}

export default ProfileComponent