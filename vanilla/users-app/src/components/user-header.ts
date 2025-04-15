export class UserHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header><h1>Users app</h1></header>`;
  }
}

customElements.define("user-header", UserHeader);
