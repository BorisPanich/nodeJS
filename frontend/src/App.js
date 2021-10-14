import React, { useEffect, useState } from 'react';
import * as axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get("http://localhost:8844/users").then(res => {
      setUsers(res.data)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  const createUser = () => {
    axios.post("http://localhost:8844/users").then(res => {
      getUsers()
    })
  }

  return (<>
    <div><button onClick={createUser}>add User</button></div>
    <div>{users.map(u => <div>{u.name}</div>)}</div>
  </>);
}

export default App;
