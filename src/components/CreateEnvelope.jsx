import React, { useState } from "react";
import { Form } from "react-router-dom";
const CreateEnvelopePage = () => {
  const [signer1, setSigner1] = useState({ name: "", email: "" });
  const [signer2, setSigner2] = useState({ name: "", email: "" });

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark">
      <div
        className="card shadow-lg"
        style={{ width: "400px", backgroundColor: "#333", color: "#f8f9fa" }}
      >
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4 text-light">
            Create Envelope
          </h3>
          <Form method="post" action={"/envelope/create"}>
            <div className="mb-3">
              <label htmlFor="signer1Name" className="form-label text-light">
                Signer 1 Name
              </label>
              <input
                type="text"
                id="signer1Name"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter signer 1 name"
                name="f_name"
                value={signer1.name}
                onChange={(e) =>
                  setSigner1({ ...signer1, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signer1Email" className="form-label text-light">
                Signer 1 Email
              </label>
              <input
                type="email"
                id="signer1Email"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter signer 1 email"
                value={signer1.email}
                name="f_email"
                onChange={(e) =>
                  setSigner1({ ...signer1, email: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="signer2Name" className="form-label text-light">
                Signer 2 Name
              </label>
              <input
                type="text"
                id="signer2Name"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter signer 2 name"
                value={signer2.name}
                name="s_name"
                onChange={(e) =>
                  setSigner2({ ...signer2, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signer2Email" className="form-label text-light">
                Signer 2 Email
              </label>
              <input
                type="email"
                id="signer2Email"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter signer 2 email"
                value={signer2.email}
                name="s_email"
                onChange={(e) =>
                  setSigner2({ ...signer2, email: e.target.value })
                }
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Envelope
            </button>
          </Form>
          <div className="text-center mt-3">
            <small className="text-light">
              Need help?{" "}
              <a href="#support" className="text-primary">
                Contact Support
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEnvelopePage;
