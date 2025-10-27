import { Component } from "react";

class ClassCounter extends Component{
    state =  {count : 0 }
    constructor(){
        super()
        console.log("ClassCounter.Constructor() is called.")
    }
    componentDidMount(){
        console.log("componentDidMount() is called.")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate() is called.")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount() is called.")
    }
    render(){
        console.log("render() is called.")
        return <div style = {{border: "2px solid Grey", backgroundColor: "darkslategray"}}>
        <h2>Class Component</h2>
        <h4>count = {this.state.count}</h4>
        <button onClick={()=>{this.setState({count: this.state.count + 1})}} style={{backgroundColor: "lightgreen"}}>Increment</button>
    </div>
    }
}
export default ClassCounter