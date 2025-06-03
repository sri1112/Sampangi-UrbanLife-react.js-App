import React from "react";
function Testtt(props){
    return(
        <div>
            <p>
                Emp id : {props.employee.id} <br/>
                Emp name : {props.employee.name}<br/>
                Emp salary : {props.employee.salary}
            </p>
        </div>
    )
}
function Obj(){
    const emp = {
        id: 101, 
        name : "srikar", 
        salary : 250000
    }
    return(
        <div>
            <Testtt employee = {emp} />
        </div>
    )
}
export default Obj