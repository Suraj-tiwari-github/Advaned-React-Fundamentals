//* here goes our first custom hook.

import {useState} from 'react';

const useToggle=(defaultValue)=>{
    const [show, setShow]=useState(defaultValue);
    const toggle=()=>{
        setShow(!show);
    };
    return {show, toggle};
    //* in the above return we are returing as the object but we can also return it as an array.
}

//* Time to export now.
export default useToggle;