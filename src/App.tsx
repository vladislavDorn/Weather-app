import React, { useState } from "react";
import "./style/App.css";
import { Main } from "./style/components";
import { weatherInfoObj } from "./interfaces";
import WeatherField from "./components/textField";
import WeatherInfo from "./components/infoBox";
import Spinner from "./components/spinner";

const App: React.FC = () => {
  const [weatherInfo, setWeatherInfo] = useState({} as weatherInfoObj);
  const [city, setCity] = useState<string>("");
  const [error, SetError] = useState<boolean>(false);
  const [loading, SetLoading] = useState<boolean>(false);

  const searchCity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SetLoading(true);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4dd76ede39ef58c61ea23d78c3a9c7b1`
    );
    if (data.ok) {
      setWeatherInfo(await data.json());
      setCity("");
      SetError(false);
      SetLoading(false);
    } else {
      SetError(true);
      SetLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <Main temp={weatherInfo.main ? weatherInfo.main.temp : 15}>
      <div className="content__wrapper">
        <WeatherField
          handleInput={handleInput}
          searchCity={searchCity}
          city={city}
          error={error}
        />
        {!error ? (
          <WeatherInfo weatherInfo={weatherInfo} loading={loading} />
        ) : null}
        {loading ? <Spinner /> : null}
      </div>
    </Main>
  );
};

export default App;
