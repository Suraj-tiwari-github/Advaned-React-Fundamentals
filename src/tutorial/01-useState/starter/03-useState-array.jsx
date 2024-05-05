import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button className="btn" onClick={()=> removeItem(id)}
            style={{marginBottom:'3rem'}}>
              Remove {name}
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => {
          setPeople([]);
        }}
      >
        Remove All Item
      </button>
    </div>
  );
};

export default UseStateArray;
