import React, { useState } from "react";
import "./Weather.css";
const api = {
  key: "d287daa5fac482e8cc28327c9376b40e",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});


  const search = async (e) => {
    if (e.key === "Enter") {
      let data = await fetch(`${api.base}weather?q=${query}&appid=${api.key}`);
      let parseData = await data.json();

      setWeather(parseData);
    }
  };
  const dateBuilder = (e) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };

  const tempKelvintoCelsius = (e) => {
    const temperatureKelvin = e;

    const temperatureCelsius = temperatureKelvin - 273.15;
  
    return Math.round(temperatureCelsius.toFixed(2)) +  '°c';
  };

  const handleOnChange = (e) => {
 
    setQuery(e.target.value);
  };
  return (
   
   <div className={(typeof weather.main !== "undefined") ? (weather.main.temp - 273.15 > 16 ? 'app-warm' : 'app') : 'app-warm'}>

      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleOnChange}
            onKeyPress={search}
          />
        </div>
        <div>
          {typeof weather.main != "undefined" ? (
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
                <div className="date">{dateBuilder(new Date())}</div>
                <div className="weather-box">
                  {tempKelvintoCelsius(weather.main.temp)}
                </div> 
                <div className="wather">
                  {weather.weather[0].main}
              </div>  
            </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </main>
      </div>
   
  );
}
//d287daa5fac482e8cc28327c9376b40e
