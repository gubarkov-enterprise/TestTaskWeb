
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    const role = localStorage.getItem('role');
    if (role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }




  }
}
