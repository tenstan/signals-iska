import { addUser } from "./state/users";
import "./components/user-header.js";
import "./components/user-form.js";
import "./components/user-list.js";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <user-header></user-header>
  <button id="add-default">Create default user</button>
  <user-form></user-form>
  <user-list></user-list>
`;

document.querySelector("#add-default")?.addEventListener("click", () => {
  addUser({ id: Date.now().toString(), name: "John Doe", age: 18 });
});
