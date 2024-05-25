import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import  Places  from "./Places";
import Hotels from "./Hotels";
import { Login } from "./Login";

function App() {
  const [hotels, setHotels] = useState([]);
  const [places, setPlaces] = useState([]);

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
      <Navbar />
      <Homepage />
      {/* Pass the fetched places data to the Places component */}
      <Places places={places} />
      {/* Pass the fetched hotels data to the Hotels component */}
      <Hotels hotels={hotels} />
      <Footer />
    </div>
  );
}

export default App;
