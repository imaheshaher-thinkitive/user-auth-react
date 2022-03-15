import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import loadProfile from "../../../lib/custom-hook/helper/loadToken";
import services from "../../../services/service";
import style from "./UpdateProfile.module.css"

function UpdateProfileForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
      const formData = new FormData()
        formData.append("image",data.avatar[0])
    
       let headers  ={ ...loadProfile(),"Content-Type": "multipart/form-data",
    }
    
    services.updateProfileImage(formData,headers).then((response) => {
        let {data}=response
        if(data.status){
            toast(data.message)
            props.closeModal()
        }
        else {
            toast(data.message)
        }
    }).catch((e) =>{
        toast(e)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
       
        <div className={`form-group` }>
          <label>Profile Image</label>
          <input
            type="file"
            className="form-control"
            placeholder="Select Profile Image"
            {...register("avatar", {
              required: true
            })}
          />
          {errors.avatar && <p>Please check the Profile Image</p>}
        </div>
        <div className={`mt-2 ${style.update_button}`}>
              <button type="submit" className={"btn btn-primary btn-block"}>Update</button>
              </div>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
