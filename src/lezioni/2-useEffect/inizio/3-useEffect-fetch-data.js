import React, { useState, useEffect } from "react";
import axios from 'axios';
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    axios.get(url).then((res) => { setUsers(res.data); console.log(res);}).catch(err => console.log(err));
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <React.Fragment>
      <h1>Fetch Component</h1>
      <ul className="users">
        {
          users.map((item) => {
            const {login, id, avatar_url, html_url}=item;
            return <li key={id} className="shadow">
              <img src = {avatar_url} alt={login}></img>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
            </li>
          })
        }
      </ul>
    </React.Fragment>
  );
};

export default FetchComponent;
