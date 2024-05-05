import React from 'react';
import { useState } from "react";


const UseStateBasics = () => {
  // console.log(useState());
  // const value=useState('hello')[0];
  // const func=useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0); //passing zero as a initial value.

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You Clicked {count} Times</h4>
      <button type="submit" className="btn" onClick={handleOnClick()}>
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
