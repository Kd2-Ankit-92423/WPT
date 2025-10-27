import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()  //hook 
    const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value})

    const handleSubmitClick = () => {
    if(formData.email === 'AnkitSingh6075@gmail.com' && formData.passwd === 'Ankit') {
      // if success, go to welcome
      navigate("/welcome", {
        state: {
          email: formData.email
        }
      })
    }
    else {
      toast.error("Invalid email or password.")
    }
  }
    return <div className='col-6 m-3 p-3 box border border-2'>
        <div>
            <label className='form-group mb-3' htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Enter the email" onChange={handleChange} />
        </div>
        <div>
            <label className='form-group mb-3' htmlFor="password">Password: </label>
            <input type="password" id = "password" placeholder="Enter the password" onChange={handleChange} />
        </div>
        <div className='form-group mb-3'>
            <button className='btn btn-primary' onClick={handleSubmitClick}>Sign In</button>
        </div>
    </div>
}

export default Login