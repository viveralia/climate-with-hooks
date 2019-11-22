import React from "react";

const WeatherInfo = ({ weather: { name, main } }) => {
  const kelvin = 273.15;

  return (
    <div className="row">
      <div className="col-12 my-4">
        <div className="card text-center p-3">
          <h2 className="h5">The current weather in {name} is:</h2>
          <p className="display-3">
            {parseInt(main.temp - kelvin, 10)} &#x2103;
          </p>
          <div className="mt-2">
            <p className="mb-1">
              Min Temp: {parseInt(main.temp_min - kelvin, 10)} &#x2103;
            </p>
            <p className="mb-0">
              Max Temp: {parseInt(main.temp_max - kelvin, 10)} &#x2103;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
