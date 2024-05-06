import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, SetError] = useState(false);

  // const userValue = {
    //* this is not working
  //   avatar_url: null,
  //   events_url: null,
  //   name: null,
  //   company: null,
  //   bio: null,
  // };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          SetError(true);
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        console.log(data);
        setData(data);
        
        //* This is not working too
        // userValue.avatar_url=data.avatar_url;
        // userValue.bio=data.bio;
        // userValue.company=data.company;
        // userValue.events_url=data.events_url;
        // userValue.name=data.name;
        //* This is not working too

      } catch (error) {
        SetError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  
  if (error) {
    return <h2>A Error has Occurred</h2>;
  }
  
  
  const {avatar_url,events_url,name,company,bio}=data;
  
  return (
    <div>
      <h2>Fetch Data</h2>
      {/* //destructuring the data const [avatar_url, events_url, name, company,
      bio] = userValue; */}
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={events_url}
      />
      <h2>{name}</h2>
      <h4>Works At {company}</h4>
      <p>{bio}</p>
      {/* <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={data.avatar_url}
        alt={data.events_url}
      />
      <h2>{data.name}</h2>
      <h4>Works At {data.company}</h4>
      <p>{data.bio}</p> */}
    </div>
  );
};
export default MultipleReturnsFetchData;
