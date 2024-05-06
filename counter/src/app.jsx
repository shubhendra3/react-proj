import { useState } from "react";
import "./app.css";

export function App() {
  let [counter, setCounter] = useState(0);
  let [inc, setInc] = useState();
  let [dec, setDec] = useState();
  // let counter = 0;
  const addValue = () => {
    // console.log("clicked", counter);
    // counter += 1;

    setCounter((prevCounter) => prevCounter + +inc);
  };
  const removeValue = () => {
    // console.log("clicked", counter);
    // // counter += 1;
    if (counter - dec > 0) setCounter((prevCounter) => prevCounter - +dec);
    else alert("Invalid input");
  };

  return (
    <>
      <h1>Shubhendra Srivastava</h1>
      <h2>Tata Consultancy Services Experience {counter} </h2>
      <input
        type="number"
        value={inc}
        onChange={(e) => {
          console.log(e.target.value);
          setInc(e.target.value);
        }}
      />
      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <input
        type="number"
        value={dec}
        onChange={(e) => {
          console.log(e.target.value);
          setDec(e.target.value);
        }}
      />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}
