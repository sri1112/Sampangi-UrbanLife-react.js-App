import React, {Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            // text : ""
            // count1 : 0

        }
    }
    handleClick = () => {
        this.setState({count : this.state.count + 1})
    }
    handleClick1 = () => {
        this.setState({count : this.state.count - 1})
    }
    handleClick2 = () => {
        this.setState({count : this.state.count = 0})
    }
    render(){
        return(
            <div>
                <p>count = {this.state.count}</p>
                <button className="a" onClick={this.handleClick}>ClickMe[incriment]</button>
                <button onClick={this.handleClick1}>ClickMe[Drecriment]</button>
                <button onClick={this.handleClick2}>Reset..</button>
            </div>
        )
        }
}
export default Counter;