
import GrandChild from "./GrandChild"
function Child({count, setCount}){
return (
    <div style={{border: "2px solid Purple", display: "inline-block", padding : "10px", margin: '5px'}}>
        <h3>Child</h3>
        <GrandChild count = {count} setCount = {setCount}></GrandChild>
    </div>
)
}
export default Child
