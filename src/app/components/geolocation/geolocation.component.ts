import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  constructor(
    private _router: Router,
    private _weatherService: WeatherService,
    private _permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this._weatherService.setLatitude(position.coords.latitude);
        this._weatherService.setLongitude(position.coords.longitude);
        this._permissionService.setGeolocationPermission();
        this._router.navigate(['/weather-country']);
      }, error => {
        if(error.code == 1) this._router.navigate(['/weather-permission']);
      });
    }
  }

}
