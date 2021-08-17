import { ForecastWeatherResponse } from "./forecast_weather_response";

export class CurrentForecastResponse {
  timezone: string;
  daily: ForecastWeatherResponse[]
}
