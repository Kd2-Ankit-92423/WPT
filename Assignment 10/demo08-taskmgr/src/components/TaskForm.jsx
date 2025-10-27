import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; 
import { taskSave } from "../services/tasks"; 
import { toast } from "react-toastify";

function TaskForm() {
    const [taskForm, setTaskForm] = useState({
        id: 0, 
        title: "",
        description: "",
        dueDate: "",
    });

    const navigate = useNavigate(); 

    useEffect(() => {
        console.log("Task Form Updated:", taskForm);
    }, [taskForm]); 

    const handleAddTaskClick = async () => { 
        try {
            const newTaskData = { ...taskForm, id: Date.now() }; 
            const savedTask = await taskSave(newTaskData); 
            console.log("Task Added/Updated:", savedTask);
            toast.success("Task Added Successfully!");

            setTaskForm({
                id: 0,
                title: "",
                description: "",
                dueDate: "",
            });
            navigate("/user/tasks");
        } catch (error) {
            console.error("Error saving task:", error);
            toast.error("Failed to add task.");
        }
    };

    return (
        <div class="container mt-5">
            <h3>Add New Task</h3>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input
                                type="text"
                                value={taskForm.title}
                                onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <input
                                type="text"
                                value={taskForm.description}
                                onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Due Date</td>
                        <td>
                            <input
                                type="date"
                                value={taskForm.dueDate}
                                onChange={(e) => setTaskForm({ ...taskForm, dueDate: e.target.value })}
                            />
                        </td>
                    </tr>

                </tbody>
            </table>
            <div>
                <button onClick={handleAddTaskClick}>Add Task</button>
            </div>
        </div>
    );
}

export default TaskForm;