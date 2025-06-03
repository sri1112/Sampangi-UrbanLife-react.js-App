import React from 'react'
import { useState } from 'react'

export default function FatchApi() {

    const [users, setUsers] = useState([
        {id: 1, name: "srikar", wibsite:"github"},
        {id: 2, name: "srikar aleti", wibsite:"google"}
    ]);

    
  return (
    <div>
      <h1>user Details</h1>
      {users.map(user => (
        <div>
            <img src="/logo192" alt='profile' />
            <h3>{user.name}</h3>
            <a href={user.wibsite} target='_blank'>
                web link
            </a>
        </div>
      ))}
    </div>
  )
}
