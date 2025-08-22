import React, { Component } from "react";

class Example extends Component{
    // constructor(prop){
    //     super(prop)

    // }

    render(){
        return(
            <>
                <h4>{this.props.text} {this.props.abc}</h4>
            </>
        )
    }
}

export default Example;