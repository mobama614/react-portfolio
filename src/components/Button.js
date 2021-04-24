import React, {Component} from "react";



export default class Button extends Component{
    render(){

        return(
            <div>
                <button>Button {this.props.name}</button>
            </div>
        )
    }
}