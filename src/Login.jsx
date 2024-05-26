import React, { useState, useEffect } from "react";

export const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/Accounts")
    .then((response) => response.json())
    .then((dat) => setData(dat));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    //console.log("Email:", email);
    //console.log("Password:", password);
  };
  /**
   * PROBLEM: DATA IS FETCHED SO MANY TIMES
   */
  console.log(data);
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={toggleForm}>
                  Don't have an account? Register here.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
