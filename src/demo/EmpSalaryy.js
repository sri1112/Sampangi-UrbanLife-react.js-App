import React, { useState } from 'react'

export default function EmpSalaryy() {
    const [data, setData] = useState({
        empNo: '',
        empName: '',
        basicSal: '',
    })
    const [hra, setHra] = useState();
    const [da, setDa] = useState();
    const [total, setTotal] = useState();

    let Da;
    let Hra;
    let Total;

    const {empNoo, empNamee, basicSal} = data;

    const changeHandler = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(data)
        Da = 0.2 * parseInt(basicSal)
        Hra = 0.4 * parseInt(basicSal)
        Total = parseInt(basicSal) + Da + Hra
        setDa(Da)
        setHra(Hra)
        setTotal(Total)
    }
  return (
    <div>
      <form onSubmit={submit}>
        <table border={2}>
            <tr>
                <td>
                    Employee Num :
                </td>
                <td>
                    <input type='text' name='empNo' value={empNoo} onChange={changeHandler} />
                </td>
            </tr>
            <tr>
                <td>
                    Employee Name :
                </td>
                <td>
                    <input type='text' name='empName' value={empNamee} onChange={changeHandler} />
                </td>
            </tr>
            <tr>
                <td>
                    Basic Salary :
                </td>
                <td>
                    <input type='text' name='basicSal' value={basicSal} onChange={changeHandler}/>
                </td>
            </tr>
            <tr>
                <td>
                    Da :
                </td>
                <td>
                    {da}
                </td>
                
            </tr>
            <tr>
                <td>
                    Hra :
                </td>
                <td>
                    {hra}
                </td>
                
            </tr>
            <tr>
                <td>
                    Total :
                </td>
                <td>
                    {total}
                </td>
                
            </tr>
            <tr align='center'>
                <td>
                    <input type='submit' value="submit"/>
                </td>
            </tr>
        </table>
      </form>
    </div>
  )
}
