import React, { useState } from "react";
import postPeep from "../services/postPeepService";
import { useAuth } from "../contexts/AuthContext";

const PeepForm = () => {
  const [peepContent, setPeepContent] = useState("");
  const maxChars = 280;
  const { token, authorID } = useAuth();
  const [error, setError] = useState(null);

  const handleContentChange = (event) => {
    setPeepContent(event.target.value);
  };

  const peep = { author: authorID, content: peepContent };

  const handlePeepSubmit = async (e) => {
    e.preventDefault();
    try {
      await postPeep(peep, token);
      window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Compose new Peep</h2>
      <form onSubmit={handlePeepSubmit}>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="peepContent"
            placeholder="what's happening?"
            style={{ height: "100px" }}
            maxLength={maxChars}
            value={peepContent}
            onChange={handleContentChange}
          ></textarea>
          <label htmlFor="peepContent">What's happening?</label>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-chitter mt-2">
              Peep
            </button>
            <small className="text-muted mt-2">
              {maxChars - peepContent.length} characters left
            </small>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PeepForm;
