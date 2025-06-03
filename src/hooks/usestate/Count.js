import React, {useState} from "react";
function Count(){
    const [count, setCount] = useState(0);
    const incre = () => setCount(count + 1);
    const decre = () => setCount(count - 1);
    return(
        <div>
            <p>count={count}</p>
            <button onClick={incre} >Incriment</button>
            <button onClick={decre} >Drecriment</button>
        </div>
    )
}
export default Count;