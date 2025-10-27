import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { deleteTaskById, findAllTasks } from "../services/tasks"; 

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const task = findAllTasks();
        setTasks(task);
    }, []);

    return (
        <div class="container mt-3">
            <h3>Task List</h3>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th colSpan={'2'}>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate}</td>
                            <td>
                                <button class="btn btn-primary" onClick = {() => deleteTaskById(task.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style = {{marginTop: "10px"}}>
                <button class="btn btn-success" onClick={() => navigate("/TaskForm")}>
                    Add Task
                </button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button class="btn btn-primary mt-3" onClick = {() => navigate("/user/find")}>
                    Find Task
                </button>
            </div>
            <div style={{ marginTop: '10px'}}>
                <button class="btn btn-primary mt-3" onClick = {() => navigate("/user/delete")}>
                    Delete Task by Id
                </button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <button class="btn btn-danger"><Link to="/login" style={{ textDecoration: 'none', color: "white" }}>Logout</Link></button>
            </div>
        </div>
    );
}

export default TaskList;