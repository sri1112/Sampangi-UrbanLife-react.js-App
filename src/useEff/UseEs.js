import React, { useEffect, useState } from 'react'

export default function UseEs() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(50);

    const myEvent1 = () =>{
        setCount(count + 1)
    }
    const myEvent2 = () => {
        setCount1(count1 - 1)
    }
    useEffect( () => {
        console.log("effect is commited")

    },[count]
    )
  return (
    <div>
      <h1>Count up : {count}</h1>
      <button onClick={myEvent1}>Click1</button>
      <h1>Count down : {count1}</h1>
      <button onClick={myEvent2}>Click2</button>
    </div>
  )
}
