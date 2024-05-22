import { useState } from "react";
import { data } from "../../../data.js";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submiited");
    if(!name){
      console.log("try submitting empty values")
      return 
    }
    const newId = Date.now(); 
    const newName = name;
    // console.log(newId,newName)
    const newUser = { id: newId, name: newName };
    const updatedUser = [...user, newUser];
    setUser(updatedUser);
    setName('');
  };

  const removeUser=(id)=>{
    const updatedUsers=user.filter((person)=>person.id!==id);
    setUser(updatedUsers)
  };


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users</h2>
      {
        /* render users below */
        user.map((person) => {
          return <div>
            <h4 key={person.id}>{person.name}</h4>
          <button type='button' className='btn' onClick={()=>removeUser(person.id)}>Remove {person.name} </button>
        </div>
        })
      }
    </div>
  );
};
export default UserChallenge;
