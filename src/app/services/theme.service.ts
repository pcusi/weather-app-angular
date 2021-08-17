import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  getTheme() {
    const themePreference = JSON.parse(JSON.stringify(localStorage.getItem('theme')));
    return themePreference;
  }

}
