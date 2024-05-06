import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const[data,setData]=useState(null);

  useEffect(()=>{
    const fetchUser=async()=>{
      try {
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  },[])

  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
