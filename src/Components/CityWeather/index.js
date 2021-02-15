import React from "react";

const CityWeather = ({ cityWeather }) => {
  console.log(cityWeather);
  var a;
  if (Number(cityWeather.temp).toFixed(1) != 0.0) {
    a = <h4>{Number(cityWeather.temp).toFixed(2)}°</h4>;
  } else {
    a = <p></p>;
  }

  return (
    <div>
      <h4>{cityWeather.name}</h4>
      {a}
      <h4>{cityWeather.desc}</h4>
    </div>
  );
};

export default CityWeather;
