import React from "react";
import UserContainer from "./UserContainer";

const Navlinks = ({user, logout}) => {
  return (
    <div className="nav-container">
      <ul className="nav-link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout}/>
    </div>
  );
};

export default Navlinks;
