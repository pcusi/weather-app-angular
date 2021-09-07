import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/json/error_404.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    minWidth: '328px',
    maxWidth: '500px',
    minHeight: '328px',
    maxHeight: '500px',
    margin: '0 auto',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
