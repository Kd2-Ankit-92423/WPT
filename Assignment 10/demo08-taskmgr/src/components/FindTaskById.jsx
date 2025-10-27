import { useEffect } from "react";
import { findTaskById } from "../services/tasks";

function FindTaskById() {
    const {task, setTask} = useState(0);
    const {taskId, setTaskId} = useState(0);
    const handleFindByIdClick = () => {
        if(!taskId.trim()){
            toast.error("Please enter a valid Task ID.");
            return;
        }
        try {
            const foundTask = findTaskById(taskId);
            setTask(foundTask);
            toast.success(`Task ${taskId} found successfully.`);
        } catch (error) {
            toast.error("Failed to find task.");
        }
    };
    return (
        <div>
            <h3>Find Task By ID</h3>
            <div className='form-group mb-3'>
                <label htmlFor='taskId'>Task ID: </label>
                <input type='text' id='taskId' className='form-control' onChange={(e) => setTaskId(e.target.value)} placeholder="Enter the task id"/>
            </div>
            <div className='form-group mb-3'>
                <button className='btn btn-primary mx-3' onClick={handleFindByIdClick}>Find Task</button>
            </div>
            {task && (
                <div>
                    <h4>Task Details:</h4>
                    <p><strong>ID:</strong> {task.id}</p>
                    <p><strong>Title:</strong> {task.title}</p>
                    <p><strong>Description:</strong> {task.description}</p>
                    <p><strong>Due Date:</strong> {task.dueDate}</p>
                </div>
            )}
            
        </div>
    );
}
export default FindTaskById;