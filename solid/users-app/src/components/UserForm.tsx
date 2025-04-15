import { createEffect, createSignal } from "solid-js";
//import { addUser, users } from "../contexts/UserStore";
import { useUsers } from "../contexts/UserContext";

export const UserForm = () => {
  console.log("Render UserForm");

  const [name, setName] = createSignal("");
  const [age, setAge] = createSignal(0);
  const { users, addUser } = useUsers();

  createEffect(() => {
    console.log(`There are now ${users().length} users.`);
  });

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    addUser({ id: Date.now().toString(), name: name(), age: age() });
    setName("");
    setAge(0);
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
      <h2 class="form-header">Create a new user</h2>

      <label for="name">Name</label>
      <input
        id="name"
        value={name()}
        onChange={(e) => setName(e.target.value)}
      />

      <label for="age">Age</label>
      <input
        id="age"
        type="number"
        value={age()}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />

      <button class="form-button" type="submit">
        Save
      </button>
    </form>
  );
};
