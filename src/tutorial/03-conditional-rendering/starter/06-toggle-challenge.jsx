import {useState} from 'react';

const ToggleChallenge = () => {
  const [showAlert,setShowAlert]=useState(false);

  // const toggleAlert=()=>{
  //   if(showAlert){
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // }

  return (
    <div>
      <h1>toggle challenge</h1>
      <button type="submit" className="btn" onClick={()=>setShowAlert(!showAlert)}>
        Toggle
      </button>
      {   showAlert && <Alert />}
    </div>
  );
};

const Alert=()=>{
  return <div className='alert alert-danger'>
    Hello world
  </div>
}

export default ToggleChallenge;
