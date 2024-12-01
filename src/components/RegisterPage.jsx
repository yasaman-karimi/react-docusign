import React, { useState } from "react";
import { Link } from "react-router-dom";
import service from "../service";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await service.register(username, password);
      if (register) {
        navigate("/login");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark rounded">
      <div
        className="card shadow-lg"
        style={{ width: "400px", backgroundColor: "#333", color: "#f8f9fa" }}
      >
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4 text-light">Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            {error && <div className="alert alert-danger">{error}</div>}
          </form>
          <div className="text-center mt-3">
            <small className="text-light">
              Already have an account? <Link to="/Login">Login here</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
