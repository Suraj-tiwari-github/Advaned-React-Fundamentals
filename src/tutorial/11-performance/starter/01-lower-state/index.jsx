import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Counter from './Counter';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  //* Moving this state to a separate component and using the component here will same couple of render per each render of a list component
  // const [count, setCount] = useState(0);

  return (
    <section>
      {/* <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button> */}
      <Counter/>
      <List people={people} />
    </section>
  );
};
export default LowerState;
