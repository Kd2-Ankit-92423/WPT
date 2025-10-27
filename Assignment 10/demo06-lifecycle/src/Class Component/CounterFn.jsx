import { useState } from "react";
import ClassCounter from "./ClassCounter";
import { useEffect } from "react";

function FunctionCounter(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("callback is called by system(like componentDidMount()---called once")
        return()=> {
            console.log("Return callback fn (like componentWillUnmount()")
        }
    },[])
    //with dependency array
    useEffect((count)=>{
        console.log("like callbackDidUpdate()")
    },[count])
    useEffect(()=>{
        console.log("post render()")
    })
    return <div style = {{border: "2px solid Grey", backgroundColor: "darkslategray"}}>
        <h4>Count: {count}</h4>
        <button onClick={()=>setCount(count+1)} style={{backgroundColor: 'lightgreen'}}>Increment</button>
    </div>
}

export default FunctionCounter