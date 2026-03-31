import React, { useEffect, useState } from 'react'
import { getUserFetch } from '../api/fetchApi';

function FetchUsers() {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        getUserFetch(). then((data) => setUsers(data));
    }, []);
  return (
    <div>
        <h2>Fetch API Users</h2>
        {users.map((user) => (
            <p key={user.id}>{user.email}</p>
        ))}
    </div>
  );
}

export default FetchUsers;