const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>

  </style>
  <section class="page-row-wrapper main-footer-section">
	<footer class="content-wrapper column">
		<div class="footer-content">
		2024 | Erik de Vos | <a href="https://www.linkedin.com/in/erikdevos/" target="_blank">LinkedIn</a> | <a href="https://github.com/erikdevos/portfolio" target="_blank">Github</a>
		</div>
		
	</footer>

</section>
`;

class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define('my-footer', MyFooter);
