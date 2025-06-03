import React from "react";
function Testt(props){
    return(
        <div>
            <ul>
                {props.nums.map(x => <li>{x}</li>)}
            </ul>
        </div>
    )
}
function prop(){
    const arr = [1, 2, 3, 4];
    return(
        <div>
            <Testt nums = {arr} />
        </div>
    )
}
export default prop;