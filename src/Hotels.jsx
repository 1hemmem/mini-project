import React from "react";

export const Hotelscard = ({ imageSrc, title, description }) => {
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

export const Hotels = () => {
  const HotelsData = [
    {
      imageSrc: chrea,
      title: "Ville Des Roses Hotel",
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
      title: "Santorini",
      description:
        "Picturesque Greek island known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    },
    {
      imageSrc: chrea,
      title: "Great Barrier Reef",
      description:
        "World's largest coral reef system, home to a diverse array of marine life and a popular destination for snorkeling and diving.",
    },
  ];

  return (
    <div>
      {" "}
      <h1 className="display-4 fw-bold text-dark d-flex justify-content-center align-items-center">
        <br />
        Best Hotels
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        {HotelsData.map((place, index) => (
          <Hotelscard
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
