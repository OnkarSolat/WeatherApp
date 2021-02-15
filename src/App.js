import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityInput from "./Components/CityInput";
import CityWeather from "./Components/CityWeather";
import React from "react";

export default function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({
    name: "",
    temp: "",
    desc: ""
  });
  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8eadc328b47149521321cf2bb779cf36`
    )
      .then((res) => res.json())
      .then((result) => {
        setCityWeather({
          name: result.name,
          temp: result.main.temp - 273.8,
          desc: result.weather[0].description
        });
      });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CityInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <CityWeather cityWeather={cityWeather} />
    </div>
  );
}
