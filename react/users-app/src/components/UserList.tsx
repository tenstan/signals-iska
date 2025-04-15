import { useEffect } from "react";
import { useUsers } from "../contexts/UserContext";

export const UserList = () => {
  console.log('Render UserList');

  const { users } = useUsers();

  return (
    <div>
    <h2>Current users:</h2>
    <table width={400} cellPadding={10} border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
