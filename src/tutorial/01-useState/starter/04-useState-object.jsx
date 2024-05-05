import { useState } from "react";

const UseStateObject = () => {
  //* We have used a array for doing this.
  //* let's do the same with object.
  // const [name, setName]=useState('suraj');
  // const [age,setAge]=useState(24);
  // const [hobby,setHobby]=useState('Writing Code');

  // const updateValue=()=>{
  //   setName('john');
  //   setAge(25);
  //   setHobby("Doing Exercise");
  // }

  const [person, setPerson] = useState({
    name: "suraj",
    age: 24,
    hobby: "coding",
  });

  const updateValue = () => {
    setPerson({ name: "John Wick", age: 50, hobby: "Head Shots" });
  };

  return (
    <div className="container">
      <h1>UseState Object Example</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button type="button" className="btn" onClick={updateValue}>
        Shown Different person
      </button>
    </div>
  );
};

export default UseStateObject;
