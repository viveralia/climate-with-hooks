import React from "react";

const Loader = () => {
  return (
    <div className="row">
      <div className="col-12 my-4">
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            className="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
