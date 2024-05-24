import React from "react";

const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>
            Hello there,
            {user?.name?.toUpperCase()}
          </p>
          <button className="btn" onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please Login</p>
      )}

      {/* <p>
        Hello there
        {user || (
          <div>
            <p>Please login</p>
            <button className="btn" onClick={login}>
              Login
            </button>
          </div>
        )}
      </p>
      <button className="btn" onClick={logout}>
        logout
      </button> */}
    </div>
  );
};

export default UserContainer;
