import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import SignUpForm from '../signup-component/SignUpForm';
import style from "./UpdateProfile.module.css"
import UpdateProfileForm from './UpdateProfileForm';
function UpdateProfile(props) {
    const [open, setOpen] = useState(false);

    const onOpenModal=() => setOpen(true)
    const onCloseModal=() => setOpen(false)
    const closeModal = () =>{
        setOpen(false)
        props.getProfileDetail()
    }
  return (
    <div>
        <button className={`btn btn-primary mt-1 ${style.update_profile}` } onClick={onOpenModal}>Update</button>
        <Modal open={open} onClose={onCloseModal}>
            <div>
             <UpdateProfileForm  closeModal={closeModal} />
            </div>
        </Modal>
    </div>

  )
}

export default UpdateProfile