import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import User from "./User";

function UserList() { //component
  const users = [ //array
    { id: 1, name: "bhumi", age: 25, img: user1 },
    { id: 2, name: "gautam", age: 18, img: user2 }
  ];

  return (
    <div>
      {users.map(user => (
        <User
          key={user.id} //props
          name={user.name}
          age={user.age}
          img={user.img}
        />
      ))}
    </div>
  );
}

export default UserList;




