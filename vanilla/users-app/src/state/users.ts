import { signal } from "@preact/signals";

export interface User {
  id: string;
  name: string;
  age: number;
}

export const users = signal<User[]>([]);

export function addUser(user: User) {
  users.value = [...users.value, user];
}
