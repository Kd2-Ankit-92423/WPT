import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import TaskList from './components/TaskList'
import { Route, Routes } from 'react-router'
import TaskForm from './components/TaskForm'
import DeleteTaskById from './components/DeleteTaskById';
import FindTaskById from './components/FindTaskById';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <Routes>
        <Route index element=<Login /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
        <Route path="/user/tasks" element=<TaskList />/>
        <Route path="/TaskForm" element=<TaskForm/> />
        <Route path="/user/delete" element=<DeleteTaskById /> />
        <Route path="/user/find" element=<FindTaskById /> />
      </Routes>
    </div>
  )
}

export default App
