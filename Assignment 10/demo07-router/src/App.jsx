import Home from "./components/Home"
import Login from "./components/Login"
import {Link, Route, Routes} from 'react-router'
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import toast from 'react-toastify';
import NotFound from "./components/NotFound";
function App() {
return <div>
      <h1>React Router Demo</h1>
      <button onClick={() => toast.info("Hello World!")}>Toast</button>
      <hr/>
      <Link className='btn btn-link' to="/home">Home</Link>
      <Link className='btn btn-link' to="/login">Login</Link>
      <Link className='btn btn-link' to="/about">About Us</Link>
      <hr/>
      <Routes>
        <Route index element=<Home/> />
        <Route path='/home' element=<Home/> />
        <Route path='/login' element=<Login/> />
        <Route path='/welcome' element=<Welcome/> />
        <Route path='/about' element=<AboutUs/> />
        <Route path='*' element=<NotFound/> />
      </Routes>
    </div>
}

export default App
