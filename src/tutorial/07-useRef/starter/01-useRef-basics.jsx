import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer=useRef(null);
  console.log(refContainer); //* useRef returns current property.

  useEffect(()=>{
    refContainer.current.focus();
  })

  const isMounted=useRef(false);// returns object
  // inside that there is current property.


  //* here we are trying to achieve a functionality where we are not going to render our useEffect on initial render, But we will render it after initial render ok.
  useEffect(()=>{
    // console.log(isMounted)
    if(!isMounted.current){
      // don't check directly like if(isMounted) it will alway return true,
      // we need to check as it is a object isMounted.current, there is a current property.
      isMounted.current=true;
      return;
    }
    console.log('-re-render')
  },[value])


  const handleSubmit = (e) => {
    e.preventDefault();
    const name= refContainer.current.value;
    console.log(name);
    // setValue(name)
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' id='name' className='form-input' ref={refContainer}/>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
