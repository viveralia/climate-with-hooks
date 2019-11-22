import React, { useState } from "react";

const Form = ({ handleState }) => {
  const [query, setQuery] = useState({
    city: "",
    country: ""
  });

  const handleChange = e => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  };

  const getClimate = e => {
    e.preventDefault();
    handleState(query);
  };

  return (
    <div className="row">
      <div className="col-12">
        {/* Form */}
        <form onSubmit={getClimate}>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              className="form-control"
              onChange={handleChange}
            >
              <option value="" defaultValue>
                Select a country
              </option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="MX">Mexico</option>
              <option value="ES">Spain</option>
              <option value="US">United States</option>
            </select>
          </div>
          <button type="submit" className="btn btn-dark">
            Search climate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
