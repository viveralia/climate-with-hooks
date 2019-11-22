import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="h3">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
