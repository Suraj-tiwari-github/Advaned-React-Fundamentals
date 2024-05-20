import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle]=useState(false);
  console.log('render')
  return (
    <div>
      <h1>cleanup function</h1>
      <button className='btn' onClick={()=>{
        setToggle(!toggle)
      }}>Toggle Component</button>

      {toggle && <SecondComponent/>}
    </div>
  );
};

const SecondComponent=()=>{
  useEffect(()=>{
    // console.log('hmm, this is interesting');
    // const intId=setInterval(()=>{
    //   // console.log('hello from interval')
    // },1000) 
    //* it is working on every second, we need to write a cleanup function where it is close the functionality as it toggle it off.
    // return ()=>{
    //   clearInterval(intId);
    //   console.log('clean up');
    // }
    const someFunc=()=>{
      //some logic
    }

    window.addEventListener('scroll',someFunc);
  },[])
    return <h1>This is my second component</h1>
}


export default CleanupFunction;
