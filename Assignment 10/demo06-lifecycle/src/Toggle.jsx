import { useState } from "react";
import ClassCounter from './Class Component/ClassCounter';
import FunctionCounter from "./Class Component/CounterFn";
import AdvanceCounter from "./Class Component/AdvancedCounter";
import DangerCounter from "./Class Component/DangerousCounter";

function ToggleClick(){
    const [visible, setVisible] = useState(true)

    return <div>
        <button onClick={()=>setVisible(!visible)}>Toggle</button>
        <br/><br/>
        {/* {visible && <ClassCounter/>} */}
        
        {/* {visible && <FunctionCounter/>} */}
       { visible && <AdvanceCounter/>}
       {/* {visible && <DangerCounter/>} */}


    </div>
}
export default ToggleClick