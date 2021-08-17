
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { PermissionService } from '../services/permission.service';

@Injectable()
export class GeolocationPermissionGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _permissionService: PermissionService
  ) { }

  canActivate() {
    const permission = this._permissionService.getGeolocationPermission();
    if (permission != null) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
