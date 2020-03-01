import React from "react";
import { WeatherFieldProps } from '../../interfaces'

const WeatherField: React.FC<WeatherFieldProps> = ({
  handleInput,
  searchCity,
  city,
  error
}) => {
  return (
    <form className="weather__field_wrapper" onSubmit={searchCity}>
      <input
        className="weather__field"
        name="city"
        type="text"
        placeholder="Search..."
        autoComplete="off"
        value={city}
        onChange={handleInput}
      />
      {
        error ? <div className="weather__errorr">This city was not found</div> : null
      }
    </form>
  );
};

export default WeatherField;
