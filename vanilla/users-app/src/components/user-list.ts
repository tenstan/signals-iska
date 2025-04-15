import { effect } from "@preact/signals";
import { users, User } from "../state/users.js";

export class UserList extends HTMLElement {
  disposeEffect?: () => void;

  connectedCallback() {
    this.disposeEffect = effect(() => {
      this.render(users.value);
    });
  }

  disconnectedCallback() {
    this.disposeEffect?.();
  }

  render(users: User[]) {
    this.innerHTML = `
      <h2>Current users:</h2>
      <table width="500" cellPadding="10" border="1">
        <thead>
          <tr><th>Name</th><th>Age</th></tr>
        </thead>
        <tbody>
          ${users
            .map(
              (user) => `
            <tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
}

customElements.define("user-list", UserList);
