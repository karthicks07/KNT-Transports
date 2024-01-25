import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Karthick",
            course:"React"
        }
    }
    render(){
        return(
            <div>
                <h1>This is State Component</h1>
                <h2>Hello, {this.state.name} <br /> This is {this.state.course}</h2>
            </div>
        )
    }
}

export default StateComponent