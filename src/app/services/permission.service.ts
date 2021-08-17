import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  setGeolocationPermission() {
    localStorage.setItem('permission', '1');
  }

  getGeolocationPermission() {
    const permission = JSON.parse(JSON.stringify(localStorage.getItem('permission')));
    return permission;
  }

}
