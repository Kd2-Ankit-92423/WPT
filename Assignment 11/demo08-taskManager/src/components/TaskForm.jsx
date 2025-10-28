import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { userSave } from './../services/users';
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../App";
import { taskSave } from './../services/tasks';

function TaskForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })
  const {user} = useContext(UserContext);

  const navigate = useNavigate()
  
  const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value})

  const handleSubmitClick = () => {
    const taskInfo = formData
    taskInfo.userEmail = user.email
    taskSave(taskInfo)
    toast.success("Task Saved!")
    navigate("/user/tasks")
  }
  return <div> 
  <h3>New Task</h3>
  <div className='col-6 m-3 p-3 box border border-2'>
    <div className='form-group mb-3'>
      <label htmlFor='title'>Title: </label>
      <input type='text' id='title' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='description'>Description: </label>
      <input type='text' id='description' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <button className='btn btn-primary' onClick={handleSubmitClick}>Add Task</button>
    </div>
  </div>
  </div>
}

export default TaskForm
