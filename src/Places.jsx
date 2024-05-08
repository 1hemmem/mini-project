import React from "react";
import chrea from "./pictures/Chréa_3.jpg";
import chiffa from "./pictures/chiffa.jpg";
import place_tout from "./pictures/place_tout.jpg";
import daya from "./pictures/daya.jpg";
import hawch_elgaila from "./pictures/hawch_elgaila.jpg";
export const PlaceCard = ({ imageSrc, title, description, location }) => {
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
        className="card-img-top pd mr-2 ml-2"
        src={imageSrc}
        alt="Card image cap"
        style={{ borderRadius: "20px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Read more
        </a>
        <a href={location} className="btn btn-sm btn-secondary" target="blank">
          location
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
        "Chrea Mountains: Majestic peaks, tranquil lakes, ideal for hiking, nature lovers, and rich biodiversity.",
      location:
        "https://www.google.com/maps/place/Chrea/data=!4m2!3m1!1s0x128f0e6a667c662d:0x887e84e4b979a2c8?sa=X&ved=1t:242&ictx=111",
    },
    {
      imageSrc: chiffa,
      title: "Chiffa",
      description:
        "Chiffa of Blida: Picturesque nature reserve, waterfalls, lush greenery, popular for hiking, picnics.",
      location:
        "https://www.google.com/maps/place/Chiffa/@36.4624901,2.7410554,12z/data=!4m7!3m6!1s0x128f73a7f8be6fcb:0xf26fc943c48c62c8!8m2!3d36.4624901!4d2.7410554!10e5!16s%2Fm%2F05c0ywv?entry=ttu",
    },
    {
      imageSrc: place_tout,
      title: "Place du 1er Novembre",
      description:
        "La Place Toute: Historic square in Blida, bustling hub, known for local gatherings, markets, and cultural events.",
      location: "https://www.google.com/maps/place/PLACE+ETOUTE/@36.4699927,2.8261622,17z/data=!3m1!4b1!4m6!3m5!1s0x128f0db6ec61e653:0x98ad98f85cc3a9a3!8m2!3d36.4699884!4d2.8287371!16s%2Fg%2F11lf_5c68m?entry=ttu",
    },
    {
      imageSrc: daya,
      title: "Daya lake",
      description:
        "Serene oasis, desert backdrop, popular spot for relaxation, birdwatching, and nature appreciation.",
      location: "https://www.google.com/maps/place/Dhaya+lake/@36.3666083,2.6869946,17z/data=!3m1!4b1!4m6!3m5!1s0x128f6e7c4689ec5b:0x4e77d3468455bb49!8m2!3d36.3666752!4d2.691908!16s%2Fg%2F1hl3h0dp9?entry=ttu",
    },
    {
      imageSrc: hawch_elgaila,
      title: "Hawch Elgaila",
      description:
        "My home village, it's so peaceful and very kind people as much as i am. And of course i am lying.",
      location: "https://www.google.com/maps/place/%D9%85%D9%82%D8%A8%D8%B1%D8%A9+%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D9%8A%D9%86+%D8%B4%D9%87%D9%8A%D8%AF%E2%80%AD/@36.5445929,3.0060838,16.46z/data=!4m9!1m2!2m1!1z2KjZhiDYtNix2YrZgSDYp9mE2LTYqNmE2Yo!3m5!1s0x128f079ff8e029bf:0x69dff0413cf3befa!8m2!3d36.5444525!4d3.0071895!16s%2Fg%2F11q7_6jw03?entry=ttu",
    },
  ];

  return (
    <div id="Top places">
      <br />
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
            location={place.location}
          />
        ))}
      </div>
    </div>
  );
};
