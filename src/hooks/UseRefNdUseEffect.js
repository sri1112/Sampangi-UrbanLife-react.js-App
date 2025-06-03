import {useRef, useEffect} from "react";
function UseRefNdEffect() {
    const inputRef = useRef(null);

    useEffect(() => {
        alert("welcome")
        inputRef.current.focus();
    },[]);
    const handleButtonClick = () =>{
        alert("Hello "+ inputRef.current.value+ "!")
        inputRef.current.focus();
        inputRef.current.value = "";
    
    };
    return(
        <div>
            <label> name :: </label>
            <input type="text" id="name" ref={inputRef} />
            <button onClick={handleButtonClick}>say hello</button>
        </div>
    )
}

export default UseRefNdEffect;