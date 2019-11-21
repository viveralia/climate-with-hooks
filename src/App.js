import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";

const App = () => {
  // Initial States
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);

  const handleState = async query => {
    if (!query.city || !query.country) {
      setError(true);
    } else {
      setCountry(query.country);
      setCity(query.city);
    }
  };

  const fetchData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Header title="React Climate App" />
            <Form handleState={handleState} />
            {error && <Error />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
