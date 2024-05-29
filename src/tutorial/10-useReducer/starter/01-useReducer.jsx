import React, { useReducer } from 'react';
import { data } from '../../../data';

const defaultState={
  //* destructing people from data which is our data array.
  people:data,
  isLoading:false,
}
//* let's decide our action variables
const CLEAR_LIST='CLEAR_LIST';
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM='REMOVE_ITEM';


// create a empty arrow function
//* reducer needs two things, A state and a action
const reducer=(state,action)=>{
  if(action.type===CLEAR_LIST){
    //* we cannot directly updates the state values, because we are dealing with multiples states, which is for example we can see people array and isLoading: false, so basically we need to destucture it first so the states which we are not updating will remains as it is.
    // return {...state, people:[]}

    // we can also then an error message with customized message.
    throw new Error(`Action type ${action.type} not matched`)
  }

  //* like here we are checking each action type for suppose if we send some type which is not handled then in that case, we will face an error, to avoid that error scenario we need to return a normal state in that case.

  return state;
// console.log(action);
// return 'shakeandbake'
}


const ReducerBasics = () => {

  //* useReducer needs two thing, a Reducer arrow function and a default state with object
  //*here the state is itself can contain more state values in it just like useState, here we can access those bunch of state by using the dot operator state.name.
  //* dispatch is the state which updates the state with the help type, type is a mandatory filed which we need to use.
  //* dispatch uses action which indeed goes to the reducer function to update the state value, reducer is a function which updates the state value
  //* whatever gets back or returns from reducer will update the state.
  //* If say we want to update the state value, then we need to use the dispatch which goes through the reducer.
  const [state,dispatch]=useReducer(reducer,defaultState)



  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // will move this to useReducer.
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const resetItem=()=>{
    // setPeople(data);
  }

  const clearItem=()=>{
    //* we are trying to update the state with dispatch, dispatch goes through the reducer, under reducer we have state and action
    //* we have invoke dispatch(), dispatch needs an object with type: 'string' so under action we have take that string, based on that string we can update various state. as Indeed reducer is a state management library.
    dispatch({type:CLEAR_LIST})
  }
  console.log(state)
  return (
    <div>
      {/* now we cannot access people directly, people is inside the state, becoz we are using the defaultState of useReducer. */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => resetItem()}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItem()}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
