import React from "react";
class Cp extends React.Component{
    render(){
    return(
        <div>
            <ol>
                {this.props.a.map(x => <li>{x}</li>)}
            </ol>
        </div>
    )
    }
}
class Classprops extends React.Component{
    render(){
        const arr1 = [10, 20, 30, 40, 50, 60];
        return(
            <div>
                <Cp a = {arr1} />
            </div>
        )
    }
}
export default Classprops;