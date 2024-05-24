import React from "react";
import { useState } from "react";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });

  const logout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <Navlinks user={user} logout={logout}/>
    </nav>
  );
};

export default Navbar;
