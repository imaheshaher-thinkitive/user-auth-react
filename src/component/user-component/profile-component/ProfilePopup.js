import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import style from "./ProfilePopup.module.css"
import "./popup.css"
import { getLocalStorage } from '../../../lib/custom-hook/helper/localStorage';
import services from '../../../services/service';
import ProfilePopupContainer from './ProfilePopupContainer';

const loadProfile = () => {
    const token = getLocalStorage("token")
    const headers = {
        Authorization:`bearer ${token}`
    }
    return headers
}
const ProfilePopup = () => {
    const [userData,setUserData] = useState({
     
    })
    const [isLoad,setIsLoad]=useState(false)
    const [open, setOpen] = useState(false);
    const [isUpdate,setIsUpdate] = useState(false)
  const onOpenModal = () =>{ 
    setOpen(true)

      services.profileDetail(loadProfile()).then((response) =>{
          const user = response.data.data
          setUserData((prevState) => {
            return {
                ...prevState,user:user
            }
            
        })
         setIsLoad(true)
      })
    };
  const onCloseModal = () => setOpen(false);
  
   return(
    <div>
    <button className={`btn btn-primary mt-1 ${style.profile_popup}` } onClick={onOpenModal}>Open modal</button>
    <Modal open={open} onClose={onCloseModal} center>
    <ProfilePopupContainer userData={userData} isUpdate={isUpdate} />
    <div className={style.profile_update_button}>
    {/* <button className={`btn btn-success`} 
    onClick={()=>setIsUpdate(!isUpdate)}
    >
        {!isUpdate ? "Update": "Save Changes"}
    </button> */}
    </div>
    </Modal>
  </div>
   )
};

export default ProfilePopup;