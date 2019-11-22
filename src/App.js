import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import WeatherInfo from "./components/WeatherInfo";
import Loader from "./components/Loader";

const App = () => {
  // Initial States
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  const handleState = async query => {
    if (!query.city || !query.country) {
      setError(true);
    } else {
      setCountry(query.country);
      setCity(query.city);
      setError(false);
    }
  };

  // Runs everytime it detects a change either in city or in country
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    };
    city !== "" && country !== "" && fetchData();
  }, [city, country]);

  // Component View
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-md-5 my-auto">
          <Header title="React Weather App" />
          <Form handleState={handleState} />
          {error && <Error message="Both fields are required" />}
        </div>
        <div className="d-none d-md-block col-md-2"></div>
        <div className="col-12 col-md-5 my-auto">
          {isLoading ? (
            <Loader />
          ) : (
            weather && <WeatherInfo weather={weather} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
