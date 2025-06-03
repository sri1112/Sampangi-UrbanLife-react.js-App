
// import React, { Component } from 'react'
// setState
// export default class Practice extends Component {
//   state = {
//     uname: " srikar",
//   }
//   render() {
//     return (
//       <div>
//         {this.state.uname}
//         <br/>
//         <button onClick={() => {
//           this.setState({age:27})
//           console.log(this.state)
//         }}>Click</button>
//       </div>
//     )
//   }
// }
//useState
import React,{useState, useEffect} from 'react'

export default function Practice() {
  const [user, setUser]= useState({uname:"aleti "});
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  },[count])
  return (
    <div>
      <h1>{count}</h1><br/>
        <div>
          {data.map((user) => user.name)}
        </div>


      <button onClick={() => {
        setCount(count + 1)
        console.log(count)
      }}>Count</button>
      {user.uname}
      <br/>
      <button onClick={() => {
        setUser({age: 20})
        console.log(user)
      }}>Click</button>
    </div>
  )
}
