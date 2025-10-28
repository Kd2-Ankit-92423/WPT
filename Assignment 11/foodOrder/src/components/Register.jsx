import { useState } from "react";
import { useNavigate } from "react-router";
import { userSave } from "../services/users";
import { toast } from 'react-toastify';

// bootstrap css form for register component
function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '', 
        mobile: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword, 
            mobile: user.mobile
        };

        if (userData.password !== userData.confirmPassword) {
            toast.error("Registration failed: Passwords do not match.");
            return;
        }

        try {
            await userSave(userData);
            navigate("/login");
        } catch (error) {
            toast.error("Registration failed:", error);
            // Display error to the user if needed
        }
    };

    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Register</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}> 
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Username: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter name"
                                        onChange={handleChange}
                                        value={user.name} 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email address: </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                        value={user.email} 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password: </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                        onChange={handleChange}
                                        value={user.password} // Controlled component
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password: </label> {/* Corrected htmlFor */}
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword" // Corrected id
                                        placeholder="Enter Confirm password"
                                        onChange={handleChange}
                                        value={user.confirmPassword} // Controlled component
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="mobile">Mobile: </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="mobile" // Corrected id
                                        placeholder="Enter Mobile Number"
                                        onChange={handleChange}
                                        value={user.mobile} // Controlled component
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;