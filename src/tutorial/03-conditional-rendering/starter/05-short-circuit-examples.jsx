import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);

  return <div>short circuit - examples
    <h2>{text || 'default Value'}</h2>
    <h2>{name || 'default Value'}</h2>
    <h2>{name && 'Hello World'}</h2>

    {/* {text && (
      <div>
        <h2>whatever Returns</h2>
        <h2>{name}</h2>
        </div>
    )} */}

    {user && <SomeComponent name={user.name}/>}

    <h2>Ternary Opeator</h2>
    <button className='btn'>{isEditing? "Add" : "Edit"}</button>
    {user ? <div>
      <h2>Hello There {user.name}</h2>
    </div>
    : 
    <h4>Please log in to see content</h4>
    }
  </div>;
};

const SomeComponent=({name})=>{
  return(
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples;
