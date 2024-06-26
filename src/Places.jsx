import React from "react";
import './Places.css';  // Import the CSS file

function Places({ places }) {
  return (
    <div className="container" id="places">
      <h1 className="display-4 fw-bold text-dark d-flex justify-content-center align-items-center">
        <br />
        Top Places
      </h1>
      <div className="row">
        {places.map((place, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card" id="card">
              <img
                className="card-img-top"
                src={place.imageSrc}
                alt={place.title}
              />
              <div className="card-body">
                <h5 className="card-title">{place.title}</h5>
                <p className="card-text">{place.description}</p>
                <a href={place.location} className="btn btn-primary mr-2" target="_blank" rel="noreferrer">
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

export default Places;
