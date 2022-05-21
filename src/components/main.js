import { useState } from "react";

const Main = ({ api }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const kelTocel = (kel) => {
    return kel - 273.15;
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.baseURL}weather?q=${query}&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
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
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${month} ${date} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? kelTocel(weather.main.temp) > 16
            ? "main warm"
            : "main"
          : "main"
      }
    >
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      {typeof weather.main != "undefined" ? (
        <div className="container">
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(kelTocel(weather.main.temp))} °C
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Main;
