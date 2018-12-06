import { RoleGuardService } from './guards/role-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RequestComponent } from './request/request.component';
import { FormsModule } from '@angular/forms';
import { TicketService } from './services/ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ManagePanelComponent } from './manage-panel/manage-panel.component';
import { TicketViewComponent } from './manage-panel/ticket-view/ticket-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewAuditorComponent } from './new-auditor/new-auditor.component';
import { ReportComponent } from './report/report.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    LoginComponent,
    ManagePanelComponent,
    TicketViewComponent,
    NewAuditorComponent,
    ReportComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    TicketService,
    AuthenticationService,
    RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
