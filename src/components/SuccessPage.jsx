import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark rounded ">
      <div
        className="card shadow-lg"
        style={{ width: "400px", backgroundColor: "#333", color: "#f8f9fa" }}
      >
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4 text-light">Success</h3>
          <p className="text-center text-light">
            Your operation was successful! Thank you for using our service.
          </p>
          <div className="d-grid gap-2">
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
