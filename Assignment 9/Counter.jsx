import { useState } from "react"
function Counter(){
    const [count, setCount] = useState(0)
    const HandleIncClick = ()=>{
        setCount(count + 1)
        console.log("Incr Clicked: " + count)
    }
    const HandleDecClick = ()=> {
        setCount(count - 1)
        console.log("Decr Clicked: " + count)
    }
    return <div style={{margin: "5px",padding: "5px"}}>
    <h3>Counter: {count}</h3>
    <button style={{backgroundColor: "Green"}}  onClick={HandleIncClick}>Increment</button>
    <button style={{backgroundColor: "Red"}}  onClick={HandleDecClick}>Decrement</button>
    </div>
}

export default Counter