import React, { useState, useEffect } from "react";

export const Login = ({ toggleForm,isvalid,setIsvalid }) => {
  const [loginusername, setLoginusername] = useState("");
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
    data.map((profile, index) => {
      if (profile.username == loginusername && profile.password == password) {
        setIsvalid(true);
      }
      console.log(isvalid);
    });
    // compare if the username and password match with some user
  };
  /**
   * PROBLEM: DATA IS FETCHED SO MANY TIMES
   */
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
                  <label htmlFor="email">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={loginusername}
                    onChange={(e) => setLoginusername(e.target.value)}
                    placeholder="Enter your username"
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
