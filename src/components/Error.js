import React from "react";

const Error = () => {
  return (
    <div className="my-4">
      <div className="row">
        <div className="col-12">
          <div className="alert alert-danger" role="alert">
            Both fields are required
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
