import { FormEvent, useEffect, useState } from "react";
import { useUsers } from "../contexts/UserContext";

export const UserForm = () => {
  console.log("Render UserForm");

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const { users, addUser } = useUsers();

  useEffect(() => {
    console.log(`There are now ${users.length} users.`);
  }, [users]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addUser({ id: Date.now().toString(), name, age });
    setName("");
    setAge(0);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-header">Create a new user</h2>

      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        value={age.toString()}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />

      <button className="form-button" type="submit">
        Save
      </button>
    </form>
  );
};
