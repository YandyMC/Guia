window.addEventListener('load', function () {
    let addHtml2 = ``;
    addHtml2 += `
    <div class="m-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="#" class="navbar-brand fw-bold">FACCI ULEAM</a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link ">Inicio</a>
              <a href="#" class="nav-item nav-link">votación</a>
            </div>
            <div class="navbar-nav ms-auto">
              <a href="#" class="nav-item nav-link">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    `

    htmlNav.innerHTML = addHtml2;
})