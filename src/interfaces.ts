export interface weatherInfoObj {
    name: string,
    sys: { country: string },
    main: {temp: number},
    weather: [{main: string}]
}

export interface WeatherFieldProps {
    handleInput(e: React.ChangeEvent<HTMLInputElement>): void;
    searchCity(e: React.FormEvent<HTMLFormElement>): void;
    city: string,
    error: boolean,
  }