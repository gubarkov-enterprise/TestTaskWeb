import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-reporter';

  constructor(public authService: AuthenticationService) { }

  userPermit(role: string) {
    if (role === localStorage.getItem('role')) {
      return true;
    }
    return false;
  }

  authenticated() {
    if (localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
