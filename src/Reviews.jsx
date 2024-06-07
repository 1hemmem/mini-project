import React from "react";
import "./Reviews.css"; // Import the CSS file

const reviewsData = [
  {
    id: 1,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/800px-Outdoors-man-portrait_%28cropped%29.jpg",
    name: "John Doe",
    title: "Amazing Experience!",
    review: "The hotel was fantastic! The staff were friendly and the rooms were clean and comfortable.",
  },
  {
    id: 2,
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Jane Smith",
    title: "Highly Recommend",
    review: "I had a wonderful stay. The amenities were top-notch and the location was perfect.",
  },
  {
    id: 3,
    photo: "https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg",
    name: "Samuel Green",
    title: "Will Visit Again",
    review: "Great service and excellent facilities. I will definitely be coming back.",
  },
];

function Reviews() {
  return (
    <div className="container" id="reviews">
      <h2 className="display-4 fw-bold text-dark">What Our Clients Say</h2>
      <div className="row">
        {reviewsData.map((review) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={review.id}>
            <div className="card">
              <img
                src={review.photo}
                className="card-img-top"
                alt={`${review.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{review.title}</h6>
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
