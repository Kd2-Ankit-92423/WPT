import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../App";
import { useEffect } from "react";

function Logout() {
    const {setUser} = useContext(UserContext)
    //useEffect(() => {
        setUser(null)
    //}, [])
    return <div>
        <h3>Logout</h3>
        <h5>Thank you for using Task Manager</h5>
        <Link className="btn btn-link" to="/login">Login Again</Link>
    </div>
}

export default Logout
