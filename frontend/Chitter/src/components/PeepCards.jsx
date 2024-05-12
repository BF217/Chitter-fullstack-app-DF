import React from "react";

const PeepCards = ({ peep }) => {
  const date = new Date(peep.createdAt);

  const ukDateTime = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="m-0">{peep.author.name}</h6>
                    <small className="text-muted">
                      @{peep.author.username}
                    </small>
                  </div>
                </div>
                <small className="text-muted">{ukDateTime}</small>
              </div>
              <p className="mt-2">{peep.content}</p>
              <div className="d-flex justify-content-start">
                <button className="btn btn-chitter btn-sm me-2">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeepCards;
