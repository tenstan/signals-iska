import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  age: number;
};

type UserContext = {
  users: User[];
  addUser: (user: User) => void;
};

const UserContext = createContext<UserContext | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUsers must be used within UserProvider");
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
