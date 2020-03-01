import React from "react";
import { weatherInfoObj } from "../../interfaces";

const InfoList: React.FC<{ weatherInfo: weatherInfoObj; loading: boolean }> = ({
  weatherInfo,
  loading
}) => (
  <>
    {weatherInfo.name && !loading ? (
      <div className="weather__info_list">
        <div className="weather__info_location_item">
          <div className="weather__info_location">
            {weatherInfo.name}, {weatherInfo.sys.country}
          </div>
          <div className="weather__info_date">
            {new Date().toLocaleString("en", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </div>
        </div>
        <div className="weather__info_item">
          <div className="weather__info_temp">
            {Math.round(weatherInfo.main.temp)}°c
          </div>
          <div className="weather__info_weather">
            {weatherInfo.weather[0].main}
          </div>
        </div>
      </div>
    ) : loading ? null : (
      <div className="weather__info_location">Find a city</div>
    )}
  </>
);

export default InfoList;
