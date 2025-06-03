import React, {Component} from "react";
class Checkbox extends Component{
    constructor(props) {
        super(props)
        this.state = {
            checked : false
        }
        
    }
    handleChange = () =>{
        this.setState({checked : !this.state.checked});
    }
    render(){
        return(
            <div>
                <input type="checkbox" checked = {this.state.checked} onChange={this.handleChange} />
                <p>checked : {this.state.checked ? "Yes":"No"}</p>
            </div>

        )
    }
}
export default Checkbox;