import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../api/responses';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private _http: HttpClient
  ) { }

  searchCountry(name?: string, refresh?: boolean): Observable<CountryResponse> {
    return this._http.get<CountryResponse>('../../assets/json/countries.json');
  }

}
