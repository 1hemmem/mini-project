export const Navbar = () =>{
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#HomePage">
        <span className="fw-bold">Blida travels</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#Homepage">
            Home
          </a>
          <a className="nav-link" href="#Top places">
            Top Places
          </a>
          <a className="nav-link" href="#Top Hotels">
            Top Hotels
          </a>
        </div>
      </div>
    </div>
  </nav>)
};
