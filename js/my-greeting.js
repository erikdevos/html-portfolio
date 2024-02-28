const template = document.createElement('template');
template.innerHTML = `
  <style>
    h1 { color: darkred; }
  </style>
  <h1></h1> <!-- This will be replaced with the greeting -->
`;

class MyGreeting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const name = this.getAttribute('name') || 'World';
    this.shadowRoot.querySelector('h1').innerText = `Hello, ${name}!`;
  }
}

customElements.define('my-greeting', MyGreeting);
