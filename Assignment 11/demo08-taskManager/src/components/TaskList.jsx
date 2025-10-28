import { useContext } from "react"
import { UserContext } from "../App"
import { Link, useNavigate } from "react-router"
import { deleteTaskById, findAllTasks } from "../services/tasks"
import { useState } from "react"
import { useEffect } from "react"

function TaskList() {
    const [tasks, setTasks] = useState([])
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect( () => {
        if(!user)
            navigate("/login")
        else {
            const taskList = findAllTasks()
            setTasks(taskList.filter((task) => task.userEmail === user.email))
        }
    }, [])

    const handleDeleteClick = (taskId) => {
        const remainingTasks = deleteTaskById(taskId)
        setTasks(remainingTasks.filter((task) => task.userEmail === user.email))
    }

    return <div>
        <h3>My Tasks</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index, taskArr) => <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => handleDeleteClick(task.id)} >Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default TaskList 
