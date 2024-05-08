import React from "react";
import Roses from "./pictures/Ville Des Roses Hotel.jpg";
import KT from "./pictures/KT.jpg";
import Aurassi from "./pictures/Aurassi Hotel.jpg";
import Axios from "axios"
import { useState, useEffect } from "react";

export const Hotelscard = ({ imageSrc, title, description, link }) => {
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
        <a href={link} className="btn btn-primary" target="blank">
          Visit website
        </a>
      </div>
    </div>
  );
};

export const Hotels = () => {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    console.log("hello");
    fetchData();
    console.log(hotels)
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:8000/Hotels");
      setHotels(response.data);
      console.log(hotels)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

    const HotelsData = [
    {
      imageSrc: Roses,
      title: "Ville Des Roses Hotel",
      description:
        "Majestic peaks, tranquil lakes. Popular for hiking, nature enthusiasts, rich biodiversity.",
      link: "https://www.tripadvisor.fr/Hotel_Review-g2600838-d7093539-Reviews-Hotel_Ville_des_Roses-Blida_Blida_Province.html",
    },
    {
      imageSrc: KT,
      title: "KT Hotel",
      description:
        "Tallest mountain on Earth, known for its challenging climbs and breathtaking views.",
      link: "https://www.kthotels.com/",
    },
    {
      imageSrc: Roses,
      title: "BN Hotel",
      description:
        "Iconic natural wonder, famous for its layered bands of red rock revealing millions of years of geological history.",
      link: "https://fr.hotels.com/ho1449083104/bn-hotel-blida-algerie/",
    },
    {
      imageSrc: Aurassi,
      title: "Aurassi Hotel",
      description:
        "World's largest coral reef system, home to a diverse array of marine life and a popular destination for snorkeling and diving.",
      link: "https://elaurassi.dz/",
    },
  ];

  return (
    <div id="Top Hotels">
      <br />{" "}
      <h1 className="display-4 fw-bold text-dark d-flex justify-content-center align-items-center">
        <br />
        Best Hotels
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        {hotels && hotels.map((hotel, index) => (
          <Hotelscard
            key={index}
            imageSrc={hotel.imageSrc}
            title={hotel.title}
            description={hotel.description}
            link={hotel.link}
          />
        ))}
      </div>
    </div>
  );
};
