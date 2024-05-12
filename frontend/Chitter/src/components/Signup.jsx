import React, { useState } from "react";
import { validateForm } from "../utils/validationutils";
import logo from "../assets/SolidLogo.png";
import friends from "../assets/friends.jpg";
import "../App.css";
import signup from "../services/signupService.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    submit: "",
  });
  const { setSuccess } = useAuth();

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));

    // Validate form fields as user types
    const { valid, errors } = validateForm({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    if (!valid && errors[id]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: errors[id],
      }));
    } else {
      // If the field is valid, remove it from the errors state
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { valid, errors } = validateForm(formData); // left in because handleChange only validates fields users touch, so to avoid accidental submission of bad data we check again
    if (!valid) {
      setErrors(errors);
      return;
    }

    try {
      await signup(formData);
      setSuccess("Account created successfully. Please login.");
      navigate("/login");
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors, // expect to be empty
        submit: err.message, // database errors such as duplicate username or email
      }));
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <a href="/" className="me-3 mb-4">
            <img
              className="img-fluid"
              src={logo}
              alt="Chitter Logo"
              style={{ maxHeight: "5rem", width: "auto" }}
            />
          </a>
          <h1 className="display-4 fw-bold">Join Chitter today.</h1>
        </div>

        <form noValidate onSubmit={handleSubmit} className="row g-3 mt-5">
          <div className="col-12 col-md-6">
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name</label>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="username">Username</label>
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
              <div className="form-check mb-3">
                <input
                  className={`form-check-input ${
                    errors.terms ? "is-invalid" : ""
                  }`}
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  Agree to terms and conditions
                </label>
                {errors.terms && (
                  <div className="invalid-feedback d-block">{errors.terms}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="flex-container">
              {" "}
              <img
                src={friends} // royalty free image from unsplash - credit to Chang Duong
                className="signup-img img-fluid mx-auto d-none d-md-block"
                alt="Chitter Logo"
              />
            </div>
            <div className="">
              <div className="d-grid justify-content-center align-items-center">
                <button type="submit" className="btn btn-chitter btn-lg mt-3">
                  Create Account
                </button>
                {errors.submit && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.submit}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
