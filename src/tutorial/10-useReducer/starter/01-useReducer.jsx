import React, { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import reducer from "./reducer";

const defaultState = {
  //* destructing people from data which is our data array.
  people: data,
  isLoading: false,
};
//* let's decide our action variables
//* Moving this to separate file.
// const CLEAR_LIST = "CLEAR_LIST";
// const RESET_LIST = "RESET_LIST";
// const REMOVE_ITEM = "REMOVE_ITEM";


const ReducerBasics = () => {
  //* useReducer needs two thing, a Reducer arrow function and a default state with object
  //*here the state is itself can contain more state values in it just like useState, here we can access those bunch of state by using the dot operator state.name.
  //* dispatch is the state which updates the state with the help type, type is a mandatory filed which we need to use.
  //* dispatch uses action which indeed goes to the reducer function to update the state value, reducer is a function which updates the state value
  //* whatever gets back or returns from reducer will update the state.
  //* If say we want to update the state value, then we need to use the dispatch which goes through the reducer.
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // will move this to useReducer.
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);

    // dispatch({ type: REMOVE_ITEM, id });
    // There is a convention to send the id inside of a payload object, so we can wrap the following id and other details and can be send easily.
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const resetItem = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };

  const clearItem = () => {
    //* we are trying to update the state with dispatch, dispatch goes through the reducer, under reducer we have state and action
    //* we have invoke dispatch(), dispatch needs an object with type: 'string' so under action we have take that string, based on that string we can update various state. as Indeed reducer is a state management library.
    dispatch({ type: CLEAR_LIST });
  };

  // console.log(state)
  return (
    <div>
      {/* now we cannot access people directly, people is inside the state, becoz we are using the defaultState of useReducer. */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItem}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItem}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
