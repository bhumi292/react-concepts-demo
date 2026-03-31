import { useEffect, useState } from 'react';
import { getUserAxios } from '../api/axiosApi';

function AxiosUsers() {
    const [users , setUsers] = useState([]);

    useEffect(() => {
        getUserAxios().then((data)=> setUsers(data));
    }, []);
  return (
    <div>
        <h2>Axios API example</h2>
        {users.map((user) => (
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default AxiosUsers;