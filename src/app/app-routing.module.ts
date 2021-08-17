import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';
import { WeatherCountryComponent } from './components/weather-country/weather-country.component';
import { GeolocationPermissionGuard } from './guards/geolocation_permission.guard';

const routes: Routes = [
  {
    path: '',
    component: GeolocationComponent
  },
  {
    path: 'weather-country',
    canActivate: [GeolocationPermissionGuard],
    component: WeatherCountryComponent
  },
  {
    path: 'weather-permission',
    component: NoPermissionComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
