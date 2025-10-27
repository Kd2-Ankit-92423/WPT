function Child2(props){
return (
    <div style={{border: "2px solid Purple", display: "inline-block", padding : "10px", margin: '5px'}}>
        <h3>Child</h3>
        {props.children}
    </div>
)
}

export default Child2
