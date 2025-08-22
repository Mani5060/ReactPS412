import React, {Component} from "react";

class MyClass extends Component{
    constructor(){
        super()
        // this.name='Hardik';
        // this.city='Pune';

        this.state={name:'Hardik',city:'Pune'}
    }

    change=()=>{
        this.setState({name:'Medhansh'})
    }
    render(){
        return(
            <>
                <h1>Good Morning..!!</h1>
                <p>Student name is {this.state.name}</p>
                <p>City: {this.state.city}</p>
                <button onClick={this.change}>Change</button>
            </>
        )
    }
}

export default MyClass;