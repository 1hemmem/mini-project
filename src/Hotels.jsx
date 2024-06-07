import React from "react";
import './Hotels.css'; // Import the CSS file

function Hotels({ hotels }) {
  return (
    <div className="container" id="Hotels">
      <h1 className="display-4 fw-bold text-dark d-flex justify-content-center align-items-center">
        <br />
        Top Hotels
      </h1>
      <div className="row">
        {hotels.map((hotel, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card" id="card">
              <img
                className="card-img-top"
                src={hotel.imageSrc}
                alt={hotel.title}
              />
              <div className="card-body">
                <h5 className="card-title">{hotel.title}</h5>
                <p className="card-text">{hotel.description}</p>
                <a href={hotel.link} className="btn btn-primary mr-2" target="_blank" rel="noreferrer">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
