import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../App";
import { useEffect } from "react";
import { changePassword, findUserByCredentials } from "../services/users";

function ChangePassword() {
  const [formData, setFormData] = useState({
    passwd: '',
    confirmPasswd: ''
  })
  const navigate = useNavigate()
  const {setUser} = useContext(AuthContext)

  const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value})

  const handleSubmitClick = async () => {
    try {
      // if passwd not matching confirm password, show error
      if(formData.passwd !== formData.confirmPasswd) {
        toast.error("Password not match")
        return
      }
      const msg = await changePassword(formData.passwd)
      toast.success(msg)
    }
    catch(err) {
      // otherwise toast error
      toast.error(err.message)
    }
  }
  return <div className='col-6 m-3 p-3 box border border-2'>
    <h3>Change Password</h3>
    <div className='form-group mb-3'>
      <label htmlFor='passwd'>Password: </label>
      <input type='password' id='passwd' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='confirmPasswd'>Confirm Password: </label>
      <input type='password' id='confirmPasswd' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <button className='btn btn-primary mx-3' onClick={handleSubmitClick}>Change Password</button>
    </div>
  </div>
}

export default ChangePassword
