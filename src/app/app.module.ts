import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';

import player from 'lottie-web';

import { AppComponent } from './app.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';
import { ErrorComponent } from './components/error/error.component';

import { WeatherForecastComponent, WeatherCountryComponent } from './components/weather-country';

import { GeolocationPermissionGuard } from './guards/geolocation_permission.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    WeatherCountryComponent,
    NoPermissionComponent,
    ErrorComponent,
    WeatherForecastComponent,
    SearchPipe,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [
    GeolocationPermissionGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
