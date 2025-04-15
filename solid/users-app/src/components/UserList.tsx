import { For } from "solid-js";
import { users } from "../contexts/UserStore";
import { useUsers } from "../contexts/UserContext";

export const UserList = () => {
  console.log("Render UserList");

  const { users } = useUsers();

  return (
    <div>
      <h2>Current users:</h2>
      {/*@ts-expect-error: solid does not officially support legacy attributes, but they work on my machine like this, so I don't mind! */}
      <table width="500" cellPadding={10} border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <For each={users()}>
            {(user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
