import {
  createContext,
  useContext,
  createSignal,
  ParentComponent,
} from "solid-js";

export type User = {
  id: string;
  name: string;
  age: number;
};

type UserContext = {
  users: () => User[];
  addUser: (user: User) => void;
};

const UserContext = createContext<UserContext>();

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUsers must be used within a UserProvider");
  return context;
};

export const UserProvider: ParentComponent = (props) => {
  const [users, setUsers] = createSignal<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
