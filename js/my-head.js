const headTemplate = document.createElement('template');
headTemplate.innerHTML = `

<meta charset="utf-8">

<!-- Meta info -->
<title>Erik de Vos - Front-end developer - Portfolio</title>
<meta name="description" content="Erik de Vos - Front-end developer - Portfolio">
<meta name="author" content="Erik de Vos">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Favicons -->
<link rel="apple-touch-icon" sizes="180x180" href="resources/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="resources/favicon-512x512.png">
<link rel="icon" type="image/png" sizes="32x32" href="resources/favicon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="resources/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="resources/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#000000">
<meta name="theme-color" content="#000000">

<!-- Google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Sora:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Custom styling -->
<link rel="stylesheet" href="/style/style.css?v=<?php date('Y-m-d H:i:s'); ?>">

<!-- jQuery -->
<script src="//code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>

<!-- ScrollTo -->
<script type="text/javascript" src="scripting/jquery.scrollTo.min.js?t=1678721666"></script>

<!-- Animate on Scroll -->
<link href="style/aos.css?t=1" rel="stylesheet">

`;

class MyHead extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(headTemplate.content.cloneNode(true));
    }
  }
customElements.define('my-head', MyHead);
