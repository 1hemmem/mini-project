import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import Places from "./Places";
import Hotels from "./Hotels";
import { Login } from "./Login";
import { Form } from "./Form";
import { Register } from "./Registre";
import Reviews from "./Reviews";
function App() {
  const [isvalid, setIsvalid] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [places, setPlaces] = useState([]);
  const [visible, setVisible] = useState(false);
  const [button, setButton] = useState(true);
  const HandleOnClick = () => {
    setVisible(!visible);
    setButton(!button);
  };
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };
  useEffect(() => {
    // Fetch hotels from localhost:3001/hotels
    fetch("http://localhost:3001/Hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));

    // Fetch places from localhost:3001/places
    fetch("http://localhost:3001/Places")
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error("Error fetching places:", error));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {!isvalid && (
        <div>
          {isRegistering ? (
            <Register toggleForm={toggleForm} />
          ) : (
            <Login
              toggleForm={toggleForm}
              isvalid={isvalid}
              setIsvalid={setIsvalid}
            />
          )}
        </div>
      )}
      {isvalid && (
        <div>
          <Navbar />
          <Homepage />
          <Reviews />
          {/* Pass the fetched places data to the Places component */}
          <Places places={places} />
          {/* Pass the fetched hotels data to the Hotels component */}
          <Hotels hotels={hotels} />
          <div className="col d-flex justify-content-center">
            <br />
            {button && (
              <div>
                <h2>Fill the form</h2>
                <button className="btn btn-primary" onClick={HandleOnClick}>
                  Learn more
                </button>
              </div>
            )}
            {visible && <Form />}
          </div>
          <br />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
