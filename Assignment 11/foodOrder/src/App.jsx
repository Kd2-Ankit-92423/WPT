import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import { createContext } from 'react';
import ChangePassword from './components/ChangePassword';
import Register from './components/Register';
import FoodManager from './components/FoodList';

export const AuthContext = createContext({
  name: "Guest"
})

function App() {
  const [user, setUser] = useState({name: 'Guest'})
  return <div>
    <AuthContext.Provider value={{user, setUser}}>
      <Routes>
        <Route index element=<Home/>/>
        <Route path='/login' element=<Login/>/>
        <Route path= '/register' element=<Register/>/>
        <Route path='/user/foods' element=<FoodManager/>/>
        <Route path='/user/changepasswd' element=<ChangePassword/>/>
      </Routes>
    </AuthContext.Provider>
  </div>
}

export default App
