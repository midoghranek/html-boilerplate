// Import styles
import "./assets/sass/main.scss";
import photo from "./assets/images/photo.jpg";

// Web components
class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <h1>HTML Boilerplate</h1>
    <h2>Hello From Web Components</h2>
    <img class="photo" src="${photo}"/>
    `;
  }
}

customElements.define("app-root", App);

// DOM Edit
const header = `<h4>Hello From JS DOM</h4>`;
const appRoot = document.getElementById("app");
appRoot.innerHTML = header;
