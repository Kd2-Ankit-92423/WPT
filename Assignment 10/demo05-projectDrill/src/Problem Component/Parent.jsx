import { useState } from "react"
import Child from "./Child"

function Parent(){
    const [count, setCount] = useState(0)
    return (

        <div style={{border: "2px solid Red", display: "inline-block", padding : "10px", margin: '5px'}}>
            <h4>Problem</h4>
            <h3>Parent: {count}</h3>
            <Child count = {count} setCount = {setCount}></Child>
            
        </div>
    )
}
export default Parent
