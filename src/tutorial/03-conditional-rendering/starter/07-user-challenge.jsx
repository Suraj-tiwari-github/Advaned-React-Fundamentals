import { useState } from "react";

const UserChallenge = () => {
  const [user,setUser]=useState(null);

  const login=()=>{
    setUser({name:'suraj'})
  }

  const logout=()=>{
    setUser(null);
  }

  return (
    <div>
      <h1>user Challenge Jsx with conditional Rendering</h1>
      {user ? (
        <div>
          <h4>Hello There, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;

{/* <div>
  <h4>Hello there, {user.name}</h4>
  <button className="btn" onClick={logout}>
    Logout
  </button>
</div>; */}

// <div>
//           <h4>please Login</h4>
//           <button className="btn" onClick={login}></button>
//           </div>