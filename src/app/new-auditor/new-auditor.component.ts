import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-auditor',
  templateUrl: './new-auditor.component.html',
  styleUrls: ['./new-auditor.component.scss']
})
export class NewAuditorComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  addAuditor() {
    this.auth.addAuditor(this.email, this.password);
    this.router.navigate(['login']);
  }

}
