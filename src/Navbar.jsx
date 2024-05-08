export const Navbar = () =>{
  return(
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#HomePage">
        <span className="fw-bold">Blida travels</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#Homepage">
            Home
          </a>
          <a class="nav-link" href="#Top places">
            Top Places
          </a>
          <a class="nav-link" href="#Top Hotels">
            Top Hotels
          </a>
        </div>
      </div>
    </div>
  </nav>)
};
