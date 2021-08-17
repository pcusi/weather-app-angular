import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLight: boolean;
  faMoon = faMoon;
  faSun = faSun;

  constructor(@Inject(DOCUMENT) private document: Document, private _themeService: ThemeService) {}

  ngOnInit(): void {
    const themePreference = this._themeService.getTheme();
    this.isLight = JSON.parse(themePreference);

    if (themePreference == 'true') {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.add('light-theme');
    }

  }

  toggle() {
    const lightTheme = this._themeService.getTheme();

    this.isLight = !this.isLight;

    this._themeService.setTheme(this.isLight);

    if (lightTheme == 'true') {
      this.document.body.classList.remove('dark-theme');
      this.document.body.classList.add('light-theme');
    } else {
      this.document.body.classList.remove('light-theme');
      this.document.body.classList.add('dark-theme');
    }
  }

}
