import { addUser } from "../state/users.js";

export class UserForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form">
        <h2 class="form-header">Create a new user</h2>

        <label for="name">Name</label>
        <input id="name" required />

        <label for="age">Age</label>
        <input id="age" type="number" required />

        <button class="form-button" type="submit">Save</button>
      </form>
    `;

    this.querySelector("form")!.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = this.querySelector("#name") as HTMLInputElement;
      const ageInput = this.querySelector("#age") as HTMLInputElement;

      addUser({
        id: Date.now().toString(),
        name: nameInput.value,
        age: parseInt(ageInput.value),
      });

      nameInput.value = "";
      ageInput.value = "";
    });
  }
}

customElements.define("user-form", UserForm);
