import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CurrentForecastResponse } from 'src/app/api/responses';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss', '../weather-country.component.scss'],
})
export class WeatherForecastComponent implements OnInit, OnChanges {
  public forecast: CurrentForecastResponse;
  @Input() latitude: number;
  @Input() longitude: number;
  public fetching: boolean = true;

  constructor(
    private _weatherService: WeatherService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const latitude: SimpleChange = changes.latitude;
    const longitude: SimpleChange = changes.longitude;
    if (longitude.currentValue) {
      this.longitude = changes.longitude.currentValue;
    }
    if (latitude.currentValue) {
      this.latitude = changes.latitude.currentValue;
    }
    this.getForecastWeather();
  }

  ngOnInit() {
    this.getForecastWeather();
  }

  getForecastWeather() {
    setTimeout(() => { }, 10000);
    this._weatherService.getForecastWeather(this.latitude, this.longitude).subscribe(forecast => {
      this.forecast = forecast;
      this.fetching = false;
    });
  }

}
