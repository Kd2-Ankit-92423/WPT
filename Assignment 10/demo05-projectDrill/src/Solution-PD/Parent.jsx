import { useState } from "react"
import GrandChild2 from './GrandChild';
import Child2 from './Child';

function Parent2(){
    const [count, setCount] = useState(0)
    return (
        <div style={{border: "2px solid Red", display: "inline-block", padding : "10px", margin: '5px'}}>
            <h4>Containent Solution</h4>
            <h3>Parent: {count}</h3>
            <Child2>
             <GrandChild2 count = {count} setCount = {setCount}/>
            </Child2>
        </div>
    )
}

export default Parent2