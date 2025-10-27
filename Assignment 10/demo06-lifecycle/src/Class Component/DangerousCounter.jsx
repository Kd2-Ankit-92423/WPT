import { useState } from "react"
import { useEffect } from "react"

function DangerCounter(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("like componentDidMount() is called")
    },[])
    useEffect(()=>{
        console.log("like componentDidUpdate() is called.")
        setCount(count+1)
    },[count])
    return (<div>
    <h3>Dangerous Counter</h3>
      <h4>Count = {count}</h4>
      <button onClick={() => setCount(count+1)}>Incr</button>
  </div>)
}

export default DangerCounter