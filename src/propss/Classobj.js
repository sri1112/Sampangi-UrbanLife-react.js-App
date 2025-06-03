import React from "react";
class Cobj extends React.Component{
    render(){
        return(
            <div>
                <p>
                Stuent name : {this.props.st.name}<br/>
                Student rullno : {this.props.st.rullno}<br/>
                student clg : {this.props.st.clg}
            </p>
            </div>
        )
    }
}
/*
function Cobj(props){
    return(
        <div>
            <p>
                Stuent name : {props.st.name}<br/>
                Student rullno : {props.st.rullno}<br/>
                student clg : {props.st.clg}
            </p>
        </div>
    )
}
*/
class Classobj extends React.Component{
    render(){
        const stud = [{
            name : "srikar",
            rullno : 26,
            clg : "bibm"
        },
        ]
        return(
            <div>
                <Cobj st = {stud} />
            </div>
        )
    }
}
export default Classobj;