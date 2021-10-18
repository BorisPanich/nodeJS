import React, { useEffect, useRef, useState } from 'react';
import * as axios from 'axios';

function App() {

  const userNameRef = useRef(null);

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
    axios.post("http://localhost:8844/users", { name: userNameRef.current.value }).then(res => {
      getUsers()
    })
  }

  return (<>
    <input ref={userNameRef} />
    <div><button onClick={createUser}>add User</button></div>
    <div>{users.map(u => <div key={u}>{u.name}</div>)}</div>
  </>);
}

export default App;
