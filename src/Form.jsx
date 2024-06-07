import React from "react";
import { useState } from "react";

export const Form = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [num, setnum] = useState("");
  const [coming, setcoming] = useState("");
  const [leaving, setleaving] = useState("");
  const [details, setdetails] = useState("");

  const handleSubmit = (e) => {
    const PostData = {
      firstname,
      lastname,
      email,
      phone,
      num,
      coming,
      leaving,
      details,
    };

    e.preventDefault();
    fetch("http://localhost:3000/Forms", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(PostData),
    }).then(() => {
      console.log(PostData);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8" style={{ width: "80%" }}>
          <div className="card">
            <div className="card-header text-center"> {/* Centering the text */}
              <h3>Fill this form to learn more</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstname">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <label htmlFor="lastname">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
                <div className="form-group">
                  <label htmlFor="email">
                    <b>Email address</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                  <label>
                    <b>Trip Style</b>
                  </label>
                  <label htmlFor="Phone number">
                    <b>Phone number</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="Phone number"
                    value={phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    placeholder="Enter your phone number"
                    required
                  />
                  <label htmlFor="N_of_people">
                    <b>Number of people</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="N_of_people"
                    value={num}
                    onChange={(e) => {
                      setnum(e.target.value);
                    }}
                    placeholder="How many are you"
                  />
                  <label htmlFor="coming_day">
                    <b>Day of coming</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={coming}
                    onChange={(e) => {
                      setcoming(e.target.value);
                    }}
                    id="coming_day"
                  />
                  <label htmlFor="leaving_day">
                    <b>Day of leaving</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={leaving}
                    onChange={(e) => {
                      setleaving(e.target.value);
                    }}
                    id="leaving_day"
                  />
                  <label htmlFor="details">
                    <b>Details</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="details"
                    value={details}
                    onChange={(e) => {
                      setdetails(e.target.value);
                    }}
                    placeholder="Express what you wish for us to do for you"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Subscribe
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary btn-block mt-4"
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
