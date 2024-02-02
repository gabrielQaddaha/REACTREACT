import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
  faSnowflake,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=19903d233ad1118b37ebc5e78c58d3fa"
      );
      setWeather({
        temp: Math.round(result.data.main.temp - 273.15),
        city: result.data.name,
        country: result.data.sys.country,
        description: result.data.weather[0].description,
        icon: result.data.weather[0].icon,
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <hr />
      <div className="meteo">
        <h2>{weather.city}</h2>
        <br />
        <h2>{weather.temp} c°</h2>
        <FontAwesomeIcon icon={faSun} className="icon"/>
      </div>
    </div>
  );
};

export default Weather;
