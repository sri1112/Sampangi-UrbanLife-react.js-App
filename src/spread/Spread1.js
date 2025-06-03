import React from "react";
function Sp1({name,id,rollno}){
    return(
        <div>
            <p>
                {/* <h1>name is : {props.emp.name}</h1> */}
                {/* <h1>name is : {props.emp.name}</h1> */}
                <h1>name is : {name}</h1>
                <h1>id is : {id}</h1>
                <h1>rollno : {rollno}</h1>
            </p>
        </div>
    )
}
function Sp2({arr}){
    return(
        <div>
            <ol>
                {arr.map(x => <li>{x}</li>)}
            </ol>
        </div>
    )
}
function Spread1(){
    // array
    const arr = [100, 200, 300, 400, 500]
    const e = {
        name: "srikar",
        id : 101,
        rollno : 26
    }
    return(
        <div>
            {/* <Sp1 emp = {e} /> */}
            <Sp1 {...e} />
            <Sp2 {...{arr}} />
        </div>
    )
}
export default Spread1;