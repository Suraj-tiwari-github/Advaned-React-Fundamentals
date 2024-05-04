import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // const value=useState('hello')[0];
  // const func=useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount]=useState(0); //passing zero as a initial value.
  return <h2>useState basics</h2>;
};

export default UseStateBasics;
