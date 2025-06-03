
import React, { useState } from 'react'

export default function Evenodd() {

    const [data, setdata] = useState(
        {
            number: '',
        }
    )
    const [Number, setNumber] = useState('');
    const {number} = data;

    const changeHandler = (e) => {
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit = (e) => {
        e.preventDefault()
        if(number > 0){
            setNumber(number+" is positive number")
        }
        else if(number < 0){
            setNumber(number+" is negitive number")

        }
        else{
            setNumber(number+" number is Zero")

        }
    }
    

  return (
    <div>
      <u><h3> check the given number is even or odd</h3></u>
      <form onSubmit={submit}>
        <table border={2}>
            <tr>
                <td>
                    Enter your Number
                </td>
                <td>
                    <input type='text' name="number" value={number} onChange={changeHandler}/>
                </td>
            </tr>
            <tr>
                <td>
                    {Number}
                </td>
                <td>
                    <button>submit</button>
                </td>
            </tr>

        </table>
      </form>
    </div>
  )
}
