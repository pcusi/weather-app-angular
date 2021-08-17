import { WeatherResponse } from "../weather";
import { ForecastFeelsLikeResponse } from "./forecast_feels_like_response";
import { ForecastTempResponse } from "./forecast_temp_response";

export class ForecastWeatherResponse {
  dt: number;
  temp: ForecastTempResponse;
  weather: WeatherResponse[];
  feels_like: ForecastFeelsLikeResponse;
  humidity: number;
  pressure: number;
}
