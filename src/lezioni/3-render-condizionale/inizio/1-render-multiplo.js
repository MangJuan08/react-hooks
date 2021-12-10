import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsError(false);
    setLoading(true);
    try {
      const response = await axios.get(url);
      setUser(response.data);
      setLoading(false);
    }
    catch(error) {
      setIsError(true);
    }
   setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <ErrorComp></ErrorComp>;
  }
  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
    <img 
    src = {user.avatar_url} 
    alt={user.name}
    style={{ width:"80px", height: "80px" }}
     className="rounded-circle my-4 shadow" >
    </img>
    <h3>{user.login}</h3>
  </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

const ErrorComp = () => {
  return (
    <div>
      <h2>Error......</h2>
    </div>
  );
};

export default ConditionalCompining;
/* 
      
       
 
   */
