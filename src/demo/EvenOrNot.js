import React, { useState } from "react";

export default function EvenOrNot() {
  const [data, setDataa] = useState({
    number: "",
  });
  const [Number, setNumber] = useState("");

  const { number } = data;

  const changeHandler = (e) => {
    setDataa({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (number % 2 === 0) {
      setNumber(number + " Is Even Number");
    } else {
      setNumber(number + " Is Not Even Number");
    }
  };
  return (
    <div>
      <h3>Check Given Number Is Even or Not</h3>
      <form onSubmit={submit}>
        <table border={2}>
          <tr>
            <td>
              <input
                type="text"
                name="number"
                value={number}
                onChange={changeHandler}
                placeholder="Enter number"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="check Even or Odd" />
            </td>
          </tr>
          <tr>
            <td>{Number}</td>
          </tr>
        </table>
      </form>
    </div>
  );
}
