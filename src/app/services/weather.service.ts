import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentForecastResponse, CurrentWeatherResponse } from '../api/responses';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private _http: HttpClient
  ) { }

  getCurrentCountryWeather(latitude?: number, longitude?: number): Observable<CurrentWeatherResponse> {
    return this._http.get<CurrentWeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=74828e13f6f3129c29948c5fcc64ccc0`);
  }

  getForecastWeather(latitude?: number, longitude?: number): Observable<CurrentForecastResponse> {
    return this._http.get<CurrentForecastResponse>(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=4&appid=74828e13f6f3129c29948c5fcc64ccc0`);
  }

  setLatitude(latitude) {
    localStorage.setItem('latitude', latitude);
  }

  setLongitude(longitude) {
    localStorage.setItem('longitude', longitude);
  }

  getLatitude() {
    const latitude = JSON.parse(JSON.stringify(localStorage.getItem('latitude')));
    return latitude;
  }

  getLongitude() {
    const longitude = JSON.parse(JSON.stringify(localStorage.getItem('longitude')));
    return longitude;
  }

}
