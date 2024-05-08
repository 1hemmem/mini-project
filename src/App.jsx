import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { Places } from "./Places";
import {Hotels} from "./Hotels"
function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <style>

      </style>
      <Places />
      
      <Footer />
    </div>
  );
}

export default App;
