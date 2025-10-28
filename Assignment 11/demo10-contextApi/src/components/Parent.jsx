import { createContext, useState } from "react";
import Child from "./Child";

export const CounterContext = createContext()
function Parent(){
    const [count, setCount] = useState(0);

    return (
        <div style={{border: "2px solid Red", display: "inline-block", width: "250px"}}>
            <h1>Parent</h1>
            <h2>Count: {count}</h2>
            <CounterContext.Provider value={{count, setCount}}>
                <Child/>
            </CounterContext.Provider>
        </div>
    )
}

export default Parent