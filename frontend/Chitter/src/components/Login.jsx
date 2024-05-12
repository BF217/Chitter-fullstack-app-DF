import React from "react";
import "../App.css";
import logo from "../assets/SolidLogo.png";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, setIsLoggedIn, error, success, setError } = useAuth();
  const [credentials, setCredentials] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(userCredentials);
      setError(null);
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  let userCredentials;
  /^\S+@\S+\.\S+$/.test(credentials.usernameOrEmail)
    ? (userCredentials = {
        email: credentials.usernameOrEmail,
        password: credentials.password,
      })
    : (userCredentials = {
        username: credentials.usernameOrEmail,
        password: credentials.password,
      });

  return (
    <section className="vh-100" style={{ backgroundColor: "#1DA1F2" }}>
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <a href="/">
                    <img
                      className="img-fluid mb-4"
                      src={logo}
                      alt="Chitter Logo"
                    />
                  </a>
                  <h1>Chitter</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmail"
                      required
                      name="usernameOrEmail"
                      value={credentials.usernameOrEmail}
                      className="form-control form-control-lg"
                      placeholder="Enter username or email address..."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      required
                      name="password"
                      value={credentials.password}
                      className="form-control form-control-lg"
                      placeholder="Enter password..."
                      onChange={handleChange}
                    />
                    {error && (
                      <div className="alert alert-danger mt-2" role="alert">
                        {error}
                      </div>
                    )}
                  </div>

                  <button
                    className="btn btn-chitter btn-lg btn-block w-75"
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="text-center mt-5">
                    New to chitter? <a href="/signup"> Sign up! </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
