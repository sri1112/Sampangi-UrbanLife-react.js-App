import React, {Component} from "react";
class InputField extends Component{
    constructor(props){
        super(props)
        this.state = {
            text : ""
        }
    }
    handleChange = (event) => {
        this.setState({text:event.target.value})
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <p>you t yped : {this.state.text}</p>
            </div>

        )
    }
}
export default InputField;