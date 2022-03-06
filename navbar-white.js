class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-transparent navbar-white w-100 " id="navBarId">
    <div class="container">
      <a class="navbar-brand" href="/landing.html">
        <p class="text-dark pt-3 logo-blob-white d-flex"> the blob studio. </p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">Menu</span>
      </button>
      <div class="collapse navbar-collapse p-0 m-0 text-center" id="navbarNav">
        <ul class="navbar-nav ms-auto HindSiliguri">
          <li class="nav-item nav-item-white active">
            <a class="nav-link nav-menu-white-link" aria-current="page" href="/about.html">about</a>
          </li>
          <li class="nav-item nav-item-white">
            <a class="nav-link nav-menu-white-link" href="/service.html" >services</a>
          </li>
          <li class="nav-item nav-item-white">
            <a class="nav-link nav-menu-white-link" href="/ourworks.html">works</a>
          </li>
          <li class="nav-item nav-item-white">
            <a class="nav-link nav-menu-white-link" href="/contacts.html">contact us</a>
          </li>
        </ul>
      </div>
    </div>
</nav>`;
  }
}
    
customElements.define('custom-navbar-white', MyComponent);