import React from "react";
import chrea from "./pictures/Chréa_3.jpg";
import chiffa from "./pictures/chiffa.jpg";
import place_tout from "./pictures/place_tout.jpg";
import daya from "./pictures/daya.jpg";
import hawch_elgaila from "./pictures/hawch_elgaila.jpg"
export const PlaceCard = ({ imageSrc, title, description }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        marginRight: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <img
        className="card-img-top pd"
        src={imageSrc}
        alt="Card image cap"
        style={{ borderRadius: "20px" }}
      />
      <div id="idd" className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export const Places = () => {
  const placesData = [
    {
      imageSrc: chrea,
      title: "Chrea mountains",
      description:
        "Majestic peaks, tranquil lakes. Popular for hiking, nature enthusiasts, rich biodiversity.",
    },
    {
      imageSrc: chiffa,
      title: "Mount Everest",
      description:
        "Tallest mountain on Earth, known for its challenging climbs and breathtaking views.",
    },
    {
      imageSrc: place_tout,
      title: "Place du 1er Novembre",
      description:
        "Iconic natural wonder, famous for its layered bands of red rock revealing millions of years of geological history.",
    },
    {
      imageSrc: daya,
      title: "Daya lake",
      description:
        "Picturesque Greek island known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    },
    {
      imageSrc: hawch_elgaila,
      title: "Hawch El-gaila",
      description:
        "World's largest coral reef system, home to a diverse array of marine life and a popular destination for snorkeling and diving.",
    },
  ];

  return (
    <div>
      {" "}
      <h1 className="display-4 fw-bold text-dark d-flex justify-content-center align-items-center">
        <br />
        Top places to visit
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        {placesData.map((place, index) => (
          <PlaceCard
            key={index}
            imageSrc={place.imageSrc}
            title={place.title}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
};
