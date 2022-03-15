import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import style from "./ProfilePopup.module.css"
import "./popup.css"
import { getLocalStorage } from '../../../lib/custom-hook/helper/localStorage';
import services from '../../../services/service';
import ProfilePopupContainer from './ProfilePopupContainer';
import UpdateProfile from './UpdateProfile';
import loadProfile from '../../../lib/custom-hook/helper/loadToken';


const ProfilePopup = () => {
    const [userData,setUserData] = useState({
     
    })
    const getProfileDetail = () => {
      services.profileDetail(loadProfile()).then((response) =>{
        const user = response.data.data
        setUserData((prevState) => {
          return {
              ...prevState,user:user
          }
          
      })
       
    })
    }
    const [open, setOpen] = useState(false);
  const onOpenModal = () =>{ 
    setOpen(true)
    getProfileDetail()
     
    };
  const onCloseModal = () => setOpen(false);


   return(
    <div>
    <button className={`btn btn-primary mt-1 ${style.profile_popup}` } onClick={onOpenModal}>Profile</button>
    <Modal open={open} onClose={onCloseModal} center>
    <ProfilePopupContainer userData={userData}/>
    <div className={style.profile_update_button}>
      <UpdateProfile getProfileDetail = {getProfileDetail}/>
    </div>
    </Modal>
  </div>
   )
};

export default ProfilePopup;