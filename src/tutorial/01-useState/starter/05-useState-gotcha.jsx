import { useState } from "react";

const UseStateGotcha = () => {
  const [count,setCount]=useState(0);

  // const UpdateCount=()=>{
  //   setCount((currentState)=>{
  //     const newState=currentState+1;
  //     console.log("New State" + newState);
  //     return newState;
  //   })
  //   console.log("count"+count);
  // }

  //* Use State Gotcha with SetTimeout function.
  const updateCount=()=>{
    setTimeout(()=>{
      console.log('clicked the button');
      setCount((currentState)=>{
        return currentState+1;
      })
    },3000)  

  
  }
  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h4>{count}</h4>
      <button type='button' className='btn' onClick={updateCount}>Add +1</button>
      
    </div>
  ); 
};

export default UseStateGotcha;
