import { useContext } from "react"
import { CounterContext } from "./Parent"

function GrandChild(){
    const {count, setCount} = useContext(CounterContext)
    return <div style={{border: "2px solid yellow", display: "inline-block", width: "150px"}}>
        <h3>GarandChild</h3>
        <button onClick={()=>setCount(count+1)} style={{backgroundColor: "lightgreen"}}>Increment</button>
    </div>
}
export default GrandChild