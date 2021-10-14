import React, { useEffect, useState } from 'react';
import * as axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8844/users").then(res => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>{users.map(u => <div>{u.name}</div>)}</div>
  );
}

export default App;
