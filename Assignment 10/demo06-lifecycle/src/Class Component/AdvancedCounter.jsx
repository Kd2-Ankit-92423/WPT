import { useEffect } from "react";
import { useState } from "react";

function AdvanceCounter(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('lightgreen')
    useEffect(()=>{
        console.log("like componentDidMount() called.")
    },[])
    useEffect(()=>{
        console.log("like componentDidUpdate() for count is called.")
        if(count%2 === 0){
            setColor('green')
        }
        else{
            setColor('red')
        }
    },[count])
    useEffect(()=>{
        console.log('like componnentDidUpdate() for color is called.')
    },[color])
    useEffect(()=>{
        console.log("like post render() is called.")
    })
    return <div style = {{border: "2px solid Grey", backgroundColor: "darkslategray"}}>
        <h4>Count: {count}</h4>
        <button onClick={()=>setCount(count+1)} style={{backgroundColor: color}}>Increment</button>
    </div>
}
export default AdvanceCounter