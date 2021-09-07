import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-no-permission',
  templateUrl: './no-permission.component.html',
  styleUrls: ['./no-permission.component.scss']
})
export class NoPermissionComponent implements OnInit {

  showModal = false;

  options: AnimationOptions = {
    path: '/assets/json/sad_search.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    minWidth: '328px',
    maxWidth: '500px',
    minHeight: '328px',
    maxHeight: '500px',
    margin: '0 auto',
  };

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showModal = true;
    }, 3000);
    this.permission();
  }

  dismiss() {
    this.showModal = false;
  }

  permission() {
    navigator.permissions.query({
      name: 'geolocation'
    }).then((result) =>  {
      if (result.state == 'prompt') {
        this._router.navigate(['/']);
      }
    });
  }
}
