function GrandChild2({count, setCount}){
    return (
        <div style={{border: "2px solid Green", display: "inline-block", padding : "10px", margin: '5px'}}>
            <h3>Grand Child</h3>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
        </div>
    )
}


export default GrandChild2
