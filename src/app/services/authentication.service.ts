import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private client: HttpClient, private router: Router) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    })
  };

  singIn(email: string, password: string) {
    return this.client.post<any>(environment.apiUrl + 'user/authenticate', { email, password })
      .subscribe(response => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
          localStorage.setItem('role', response.role);
          switch (response.role) {
            case 'Administrator': {
              this.router.navigate(['managment']);
              break;
            }
            case 'Auditor': {
              this.router.navigate(['report']);
            }
          }
        }
      });
  }

  logOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }

  addAuditor(email: string, password: string) {
    return this.client.post(environment.apiUrl + 'user/addauditor', { email, password }, this.headers)
      .subscribe();
  }

}