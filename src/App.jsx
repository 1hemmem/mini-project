import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Top
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
      <div>
        <section class="container-fluid " id="HomePage">
          <div className="row">
            <div className="col-5 py-5 m-5 col-text-center text-md-center">
              <h1 className="display-2 fw-bold text-light col-text-center text-md-start">
                Here is blida
              </h1>
              <h2 className="display-3 col-text-center text-md-start text-white">
                The perfect place for your vocation
              </h2>
              <button className="btn btn-secondary btn-lg container-fluid">
                Learn more
              </button>
            </div>
          </div>
        </section>
        <section id="Top">Top places to visit/ resturants to eat in</section>
        <footer class="container-fluid bg-dark text-white pt-5 pb-3">
  <div class="row">
    <div class="col-md-4">
      <h3>Blida Website</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies risus quis mi.</p>
    </div>
    <div class="col-md-4">
      <h3>Navigation</h3>
      <ul class="list-unstyled">
        <li><a href="#" class="text-white">Home</a></li>
        <li><a href="#" class="text-white">About</a></li>
        <li><a href="#" class="text-white">Services</a></li>
        <li><a href="#" class="text-white">Contact</a></li>
      </ul>
    </div>
    <div class="col-md-4">
      <h3>Follow Us</h3>
      <ul class="list-unstyled">
        <li><a href="#" class="text-white"><i class="bi bi-facebook"></i> Facebook</a></li>
        <li><a href="#" class="text-white"><i class="bi bi-twitter"></i> Twitter</a></li>
        <li><a href="#" class="text-white"><i class="bi bi-instagram"></i> Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="text-center pb-2">
    <p>&copy; 2024 Blida travels. All Rights Reserved.</p>
  </div>
</footer>

      </div>
    </div>
  );
}

export default App;
