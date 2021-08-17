import { SysResponse } from "./sys_response";
import { MainResponse } from "./main_response";
import { WeatherResponse } from "./weather_response";

export class CurrentWeatherResponse {
  name: string;
  cod: number;
  sys: SysResponse;
  main: MainResponse;
  weather: WeatherResponse[];
}
