import { useEffect } from "react";
import { deleteTaskById, findTaskById  } from "../services/tasks";

function DeleteTaskById() {
    const [taskId, setTaskId] = useState(0);
    const [task, setTask] = useState(null);
    const showTask = () => {
        const foundTask = findTaskById(taskId);
        setTask(foundTask);
    };
    const handleDeleteClick = () => {
        if(!taskId){
            toast.error("Please enter a valid Task ID.");
            return;
        }
        try {
            deleteTaskById(taskId);
            toast.success(`Task ${taskId} deleted successfully.`);
        } catch (error) {
            toast.error("Failed to delete task.");
        }   
    };
    return (
        <div>
            <h3>Delete Task By ID</h3>
            <div className='form-group mb-3'>
                <label htmlFor='taskId'>Task ID: </label>
        </div>
            <input type='text' id='taskId' className='form-control' onChange={(e) => setTaskId(e.target.value)} />
            <div className='form-group mb-3'>
                <button className='btn btn-primary mx-3' onClick={showTask}>Show Task</button>
                <button className='btn btn-secondary mx-3' onClick={() => setTask(null)}>Clear</button>
            </div>
            <div className='form-group mb-3'>
            {task && ( 
                <button className='btn btn-danger mx-3' onClick={handleDeleteClick}>Delete Task</button>
            )}
            </div>
        </div>
    );
}
export default DeleteTaskById;