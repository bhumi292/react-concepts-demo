import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const user = { name: "John Doe", id: 1 };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;