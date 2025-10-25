import { useState } from "react"
function LoginForm(){
    const [email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const HandleEmailChange = (e)=>{
        SetEmail(e.target.value)
    }
    const HandlePasswordChange = ()=>{
        SetPassword(e.target.value)
    }
    const HandleSubmitChange=()=>{
        const msg = `Email: ${email} Password: ${Password}`
        alert(msg)
    }
    return <div style={{border: '1px solid black', padding: '5px', margin: '10px'}}>
        <h2 style={{textAlign: "center"}}>Login Form</h2>
        <div>Email: </div>
        <div>
        <input type="email;" onChange={HandleEmailChange} />
        </div>
        <div>Password: </div>
        <div>
        <input type="password" onChange={HandlePasswordChange} />
        </div>
        <button id = "submit" type="submit" style={{backgroundColor:"Green"}} onClick={HandleSubmitChange}>SignIn</button>
    </div>
    
}

export default LoginForm