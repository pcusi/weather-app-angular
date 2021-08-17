import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CountryResponse, CurrentWeatherResponse, WeatherResponse } from 'src/app/api/responses';
import { CountriesService } from 'src/app/services/countries.service';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-weather-country',
  templateUrl: './weather-country.component.html',
  styleUrls: ['./weather-country.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, })),
      state('*', style({ opacity: 1, })),
      transition(':enter', animate(`1000ms ease-out`)),
      transition(':leave', animate(`1000ms ease-in`))
    ])
  ]
})
export class WeatherCountryComponent implements OnInit {
  @ViewChild(WeatherForecastComponent, { static: false }) weatherForecast: WeatherForecastComponent;
  public weather: CurrentWeatherResponse;
  public country: CountryResponse;
  public longitude: number;
  public latitude: number;
  public seeker: string = '';
  fetching: boolean = true;

  constructor(
    private _weatherService: WeatherService,
    private _countryService: CountriesService
  ) { }

  ngOnInit(): void {
    this.getCurrentCountryWeather();
    this.getCountries();
  }

  getCurrentCountryWeather() {
    this.latitude = this._weatherService.getLatitude();
    this.longitude = this._weatherService.getLongitude();
    setTimeout(() => {

      this._weatherService.getCurrentCountryWeather(this.latitude, this.longitude).subscribe(weather => {
        this.weather = weather;
        this.fetching = false;
      });

    }, 1000);
  }

  /*
    searchCountry(e) {
      e.preventDefault();
      this._countryService.searchCountry().subscribe(country => {
        this.country = country;
        this.country.countries.filter(c => {
          if (c.name == e.target.value || c.name == this.seeker) {
            this._weatherService.setLatitude(c.coord.lat);
            this._weatherService.setLongitude(c.coord.lon);
            this._weatherService.getCurrentCountryWeather(c.coord.lat, c.coord.lon).subscribe(weather => {
              this.weather = weather;
              this.latitude = this._weatherService.getLatitude();
              this.longitude = this._weatherService.getLongitude();
            });
          }
        });
      });
    }
  */

  getCountries() {
    this._countryService.searchCountry().subscribe(country => {
      this.country = country;
    });
  }

  getCountryCoords(lat, lon) {
    this.seeker = '';
    this._weatherService.setLatitude(lat);
    this._weatherService.setLongitude(lon);
    this._weatherService.getCurrentCountryWeather(lat, lon).subscribe(weather => {
      this.weather = weather;
      this.latitude = this._weatherService.getLatitude();
      this.longitude = this._weatherService.getLongitude();
    });
  }

}

