import React, { Component} from "react";
class DropDown extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption : "option 1"
        }
    }
        handleChange = (event) => {
            this.setState({selectedOption: event.target.value})
        };
        render(){
            return(
                <div>
                    <select value={ this.state.selectedOption} onChange={this.handleChange}>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <p>selected option : {this.state.selectedOption}</p>
                </div>
            )
        }
    
}
export default DropDown;