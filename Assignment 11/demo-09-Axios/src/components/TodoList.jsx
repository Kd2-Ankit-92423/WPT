import axios from "axios";
import { useEffect, useState } from "react";

function TodoList(){
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        async function fetchTodoList(){
            const response = await axios.get("http://jsonplaceholder.typicode.com/todos",{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            console.log(response);
            if(response.status === 200 && response.data.length > 0){
                setTodos(response.data);
            }
            else{
                alert("Error in fetching todos data");
            }
        }
        fetchTodoList();
    },[])
    return <div>
        <h2>Todo List</h2>
            <table>
                <thead>
                    <th>User Id</th>
                    <th>To do Id</th>
                    <th>Title</th>
                    <th>Action</th>
                    <th></th>
                </thead>
                <tbody>
                        {
                            todos.map((t)=><tr key = {t.id}>
                                <td>{t.userId}</td>
                                <td>{t.id}</td>
                                <td>{t.title}</td>
                                <td>{t.completed ? "Completed" : "Pending"}</td>
                            </tr>)
                        }
                </tbody>
            </table>
    </div>
}
export default TodoList;