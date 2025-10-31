import { useState } from "react";
import { getUserByCredentials } from "../assets/services/user";

export function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const cred = { email: user.email, password: user.password };
            const userData = await getUserByCredentials(cred);
            sessionStorage.setItem("token", userData.token);
            sessionStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            window.alert("Welcome " + userData.name);
        } catch (error) {
            window.alert("Login failed: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Email Address"
                    value={user.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}
