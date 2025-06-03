// import { fireEvent } from '@testing-library/react'
import React, { useState } from 'react'

export default function Hook() {

  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
  })
  const {FirstName, LastName} = data

  
  const [FullName, setFullName] = useState('')
  
  const changeHandler = (eb) =>{
    setData({...data,[eb.target.name]:eb.target.value})
  }

  const displayName = (e) => {
    e.preventDefault();
    setFullName(FirstName+" "+LastName)
  }
  
  return (
    <div>
        <form onSubmit={displayName}>
          <table border={2}>
            <tr>
              <td>
                <label>First Name </label>
              </td>
              <td>
                <input type='text' name='FirstName' value={FirstName} onChange={changeHandler} placeholder='enter your firstName'/>
              </td>
            </tr>

            <tr>
              <td>
                <lable>Last Name</lable>
              </td>
              <td>
                  <input type='text' name='LastName' value={LastName} onChange={changeHandler} placeholder='Enter your last Name'/>
              </td>
            </tr>

            <tr>
              <td>
                {FullName}
              </td>
              <td>
                <button >submit</button>
              </td>
            </tr>

          </table>
        </form>
    </div>
  )
}
