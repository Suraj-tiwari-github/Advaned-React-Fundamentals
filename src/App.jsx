// import Starter from "./tutorial/01-useState/starter/01-error-example";
import Starter from './tutorial/01-useState/starter/02-useState-basics';

const fun = () => {
  let count = 123;
  return <h2>{count}</h2>;
};
let count = 1;

const add1 = () => {
  count = count + 1;
  return count;
};

function App() {
  return (
    <div className="container">
      {/* <button>Add 1</button> */}
      {/* <h2>{count}</h2>
      {button} */}
      <Starter />
    </div>
  );
}

export default App;
