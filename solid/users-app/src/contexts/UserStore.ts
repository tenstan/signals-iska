import { createStore } from "solid-js/store";

export type User = {
  id: string;
  name: string;
  age: number;
};

const [users, setUsers] = createStore<User[]>([]);

const addUser = (user: User) => {
  setUsers((prev) => [...prev, user]);
};

export { users, addUser };
