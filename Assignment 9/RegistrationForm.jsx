import { useState } from "react";

function RegistrationForm(){
const initialUserInfo = ({
    fname: '',
    lname: '',
    address: '',
    mobile: '',
    bdate: '',
    email: '',
    password: '',
    confirmpassword: '',
})
const [userInfo, setInfo] = useState(initialUserInfo)
/*const HandleFnameChange = (e)=>{
    setInfo({
        fname: e.target.value,
        lname: userInfo.lname,
        address: userInfo.address,
        mobile: userInfo.mobile,
        bdate: userInfo.bdate,
        email: userInfo.email,
        password: userInfo.password,
        confirmpassword: userInfo.confirmpassword,        
    })
    console.log("first Name changed: " + e.target.value)
}
const HandlelnameChange = (e)=>{
    setInfo({
        fname: userInfo.lname,
        lname: e.target.value,
        address: userInfo.address,
        mobile: userInfo.mobile,
        bdate: userInfo.bdate,
        email: userInfo.email,
        password: userInfo.password,
        confirmpassword: userInfo.confirmpassword,        
    })
    console.log("last Name changed: " + e.target.value)
}
const HandleAddressChange = (e)=>{
    const newUserInfo = {
        ...userInfo,
       address : e.target.value
    }
    setInfo(newUserInfo)
    console.log("address changed: " + e.target.value)
}
const HandlePasswordChange = (e)=>{
    const newUserInfo = {
        ...userInfo,
        password : e.target.value
    }
    setInfo(newUserInfo)
    console.log(e.target.id + " changed: " + e.target.value)
}
const HandleChange = (e)=>{
    const newUserInfo = {
        ...userInfo,
        [e.target.id]: e.target.value
    }
    setInfo(newUserInfo)
    console.log(e.target.id + " changed: " + e.target.value)
}
    return <div style={{border: '2px solid black', padding: '20px', margin: '15px'}}>
        <h2 style={{color:"gold", textAlign: "center"}}><b>
            Registration Form
            </b>
        </h2>
        <div>
            First Name: 
            <input type="text" id = "fname" onChange={HandleFnameChange}/>
        </div>
        <div>
            Last Name: 
            <input type="text" id = "lname" onChange={HandlelnameChange}/>
        </div>
        <div>
            Address: 
            <input type="textarea" id = "address"  onChange={HandleAddressChange}/>
        </div>
        <div>
            Mobile:
            <input type="tel" id = "mobile" onChange={HandleChange}/>
        </div>
        <div>
            Birth Date: 
            <input type="date" id = "bdate" onChange={HandleChange}/>
        </div>
        <div>
            Email: 
            <input type="email" id="email" onChange={HandleChange}/>
        </div>
        <div>
            Password: 
            <input type="password" id = "password" onChange={HandlePasswordChange}/>
        </div>
        <div>
            Confirm Password: 
            <input type="password" id = "confirmpassword" onChange={HandleChange}/>
        </div>
        <div>
            <button style={{backgroundColor: "green"}}>Register</button>
            <button style={{backgroundColor: "Red"}}>Cancel</button>
        </div>
    </div>
*/

const HandleChange = (e)=>setInfo({...userInfo,[e.target.id]:e.target.value})
const validate = () => {
    let isValid = true;
    const msg = "This field is required";

    if (!userInfo.fname) {
        alert("First Name: " + msg);
        isValid = false;
        return
    }

    if (!userInfo.lname) {
        alert("Last Name: " + msg);
        isValid = false;
        return
    }

    if (!userInfo.address) {
        alert("Address: " + msg);
        isValid = false;
        return
    }

    if (!userInfo.mobile) {
        alert("Mobile Number: " + msg);
        isValid = false;
        return
    }


    if (!userInfo.email) {
        alert("Email: " + msg);
        isValid = false;
        return
    }
    if (!userInfo.password) {
        alert("Password: " + msg);
        isValid = false;
        return
    }
    if((userInfo.password && userInfo.password.length<8)){
        alert("Password must contain atleast 8 characters")
        isValid=false;
        return;
    }
    if (!userInfo.confirmpassword) {
        alert("Confirm Password: " + msg);
        isValid = false;
        return
    }
    if((userInfo.confirmpassword && userInfo.confirmpassword.length<8)){
        alert("Password must contain atleast 8 characters")
        isValid=false;
        return;
    }
    if (userInfo.password && userInfo.confirmpassword && userInfo.password !== userInfo.confirmpassword) {
        alert("Password and Confirm Password do not match");
        isValid = false;
        return
    }
    return isValid;
};
    const HandleRegisterClick = (e) => {
        if (validate()) {
            console.log("Form data submitted:", userInfo);
            alert("Registration Successful!");
        } else {
            alert("Form has errors");
        }
    }
    const HandleResetClick = (e) =>{
        setInfo(initialUserInfo)
    }
    return <div style={{border: '2px solid black', padding: '20px', margin: '15px'}}>
        <h2 style={{color:"gold", textAlign: "center"}}><b>
            Registration Form
            </b>
        </h2>
        <div>
            First Name: 
            <input type="text" id = "fname" value={userInfo.fname} onChange={HandleChange}/>
            {!userInfo.fname && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        
        <div>
            Last Name: 
            <input type="text" id = "lname" value={userInfo.lname} onChange={HandleChange}/>
            {!userInfo.lname && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            Address: 
            <input type="text" id = "address" value={userInfo.address} onChange={HandleChange}/>
            {!userInfo.address && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            Mobile:
            <input type="tel" id = "mobile" value={userInfo.mobile} onChange={HandleChange}/>
            {!userInfo.mobile && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            Birth Date: 
            <input type="date" id = "bdate" value={userInfo.bdate} onChange={HandleChange}/>
            {!userInfo.bdate && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            Email: 
            <input type="email" id="email" value={userInfo.email} onChange={HandleChange}/>
            {!userInfo.email && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            Password: 
            <input type="password" id = "password" value={userInfo.password} onChange={HandleChange}/>
            {!userInfo.password && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            Confirm Password: 
            <input type="password" id = "confirmpassword" value={userInfo.confirmpassword} onChange={HandleChange}/>
            {!userInfo.confirmpassword && <div style={{color:"red", display:'inline'}}>*</div>}
        </div>
        <div>
            <button style={{backgroundColor: "green"}} onClick={HandleRegisterClick}>Register</button>
            <button style={{backgroundColor: "Red"}} onClick={HandleResetClick}>Reset</button>
        </div>
    </div>
}

export default RegistrationForm;