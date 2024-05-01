import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
function App() {
  return (
    <div>
      <Navbar />
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
        <Footer/>
    </div>
  );
}

export default App;
