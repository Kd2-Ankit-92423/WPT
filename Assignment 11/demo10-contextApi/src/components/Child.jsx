import GrandChild from "./Grandchild"

function Child(){
    return <div style={{border: "2px solid Green", display: "inline-block", width: "200px"}}>
        <h2>Child</h2>
        <div>
            <GrandChild/>
        </div>
    </div>
}
export default Child