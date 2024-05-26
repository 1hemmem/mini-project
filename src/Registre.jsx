import React, { useState } from "react";

export const Register = ({ toggleForm }) => {
  const [loginemail, setLoginemail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isadmin, setisadmin] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    const accountData = { loginemail, username, password,isadmin };
    e.preventDefault();
    fetch("http://localhost:3002/Accounts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(accountData),
    }).then(() => {
      console.log(accountData);
    });
  };
return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Create an Account</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={loginemail}
                    onChange={(e) => setLoginemail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                  <label htmlFor="isadmin">Are you admin?</label>
                  <br />
                  <input
                    type="checkbox"
                    className="form-check-input "
                    id="Yes"
                    name="admin"
                    onChange={()=>setisadmin(!isadmin)}
                  />
                  <label className="form-check-label"> Yes</label>
                  <br />    
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Register
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={toggleForm}>
                  Already have an account? Login here.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
