import React, { useState } from "react";

export default function Student() {
  const [data, setData] = useState({
    num: "",
    name: "",
    marks1: "",
    marks2: "",
    marks3: "",
    // total: '',
  });
  const { num, name, marks1, marks2, marks3 } = data;

  const [total, setTotal] = useState();
  const [result, setResult] = useState();
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setTotal(parseInt(marks1) + parseInt(marks2) + parseInt(marks3));
    if (marks1 > 35 && (marks2 > 35) && (marks3 > 35)) {
      if (total >= 250 && total <= 300) {
        setResult("First Class");
      } else if (total >= 200 && total <= 250) {
        setResult("second class");
      } else if (total >= 150 && total <= 200) {
        setResult("Third class");
      } else if (total < 150) {
        setResult("Failled");
      } else {
        console.log(data);
      }
    }
    else{
        setResult("Failled");
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h1>
          <u>Student result</u>
        </h1>
        <table border={2}>
          <tr>
            <td>Enter Student Num ::</td>
            <td>
              <input
                type="text"
                name="num"
                value={num}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Student Name ::</td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Student Marks 1 ::</td>
            <td>
              <input
                type="text"
                name="marks1"
                value={marks1}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Student Marks2 ::</td>
            <td>
              <input
                type="text"
                name="marks2"
                value={marks2}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Student Marks3 ::</td>
            <td>
              <input
                type="text"
                name="marks3"
                value={marks3}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="submit"
                value="Display Result"
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Student Total ::</td>
            <td>
              <input
                type="text"
                name="total"
                value={total}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Student Result</td>
            <td>
              <input
                type="text"
                name="result"
                value={result}
                onChange={changeHandler}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
