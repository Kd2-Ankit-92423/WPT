import { useLocation } from "react-router"

function Welcome(){
    const location = useLocation()
    return <div>
        <h2>
            Welcome {location.state?.email || 'Unknown'}
        </h2>
    </div>
}
export default Welcome