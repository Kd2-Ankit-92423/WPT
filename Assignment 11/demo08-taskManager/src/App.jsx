import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import TaskList from './components/TaskList'
import { Route, Routes } from 'react-router'
import { createContext } from 'react'
import Logout from './components/Logout'
import TaskForm from './components/TaskForm'
import UserLayout from './components/UserLayout'

export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState(null)
  return (
    <div>
      <h1>Task Manager</h1>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route index element=<Login/> />
          <Route path="/login" element=<Login/> />
          <Route path="/register" element=<Register/> />
          <Route path="/user" element=<UserLayout/> >
            <Route path="tasks" element=<TaskList/> />
            <Route path="addtask" element=<TaskForm/> />
          </Route>
          <Route path="/logout" element=<Logout/> />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
