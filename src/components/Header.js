import React from "react";

const Header = ({ title }) => {
  return (
    <div className="my-4">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="h3">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
